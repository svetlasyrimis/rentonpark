/*********************************************************************
* Paquete del archivo		: PCKG_430
* Codigo del archivo		: PCKG_430_jsRiders
* Nombre del archivo		: jsRiders.js
* Objetivo del archivo	: Scripts para el modulo Riders
*
* Categoria			: JS
* Paquete				: 430
* Autor:				: German Laso
* Version				: 1.00
*********************************************************************/

var tFormData;

jQuery(document).ready(function(){

	'use strict';

	if($('#dCalendar').length){
		$('#dCalendar')._mRiders();
	}

	if($('#fPrev').length){
		$('#fPrev').on('click', function (pEvent) {
			$('#dCalendar')._mRiders('changeDate', '-1');
			pEvent.preventDefault();
		});
	}

	if($('#fNext').length){
		$('#fNext').on('click', function (pEvent) {
			$('#dCalendar')._mRiders('changeDate', '+1');
			pEvent.preventDefault();
		});
	}

	if($('#dProduct.turn').length){
		$('#dProduct.turn').each(function() {
      $(this).on('click', function(){
				var vID = this.dataset.id;
				$('#dCalendar')._mRiders('changeProduct', vID, this);
			});
    });
	}

	if($('#dConfirm').length){
		$('#dConfirm').on('show.bs.modal', function () {
			$(this)._mContent('getReserves', '', '');
		});
	}

	if($('#btnConfirm').length){
		$('#btnConfirm').on('click', function () {
			$(this)._mContent('confirmReserves', '', '');
		});
	}

	if($("#tblBooking").length){
		$("#tblBooking").DataTable({
			"bFilter": false,
			"bInfo": false,
			"bLengthChange": false,
			"oLanguage": {
				"sEmptyTable": "No hay sesiones para mostrar."
			}
		});
	}

	if($("span #btnCancel").length){
		$("span #btnCancel").on('click', function(){

		});

	}

	if($('div .dPackItem').length){
		$('div .dPackItem').each(function(index, element) {
			$(this).data('duration', '00:20');
      $(this).draggable({
				revert: true
				});
    });
	}

	/* Auto Refresh */
	setInterval(function(){
		$('#dCalendar')._mRiders('autoRefresh');
	},  15 * 1000);

	/* Image Profile */
	_fBuildImageCrop('dImgProfileS', 'dImgProfileE', 'fileImport', {aspectRatio: 1}, 'dPictureProfile');

});

(function($){

	'use strict';

	/* Global Vars */
	var
	oSelf,
	vDateNow = null,
	tSources = {
		events: function(start, end, timezone, callback) {

			var tFormData	= new FormData();
			tFormData.append('vDate', vDateNow.format('Y-M-D'));
			tFormData.append('vUser', $('#vUser').val());

			// $.ajax('./get/json/booking/all', {
			// 	dataType: "JSON",
			// 	method: "POST",
			// 	processData: false,
			// 	contentType: false,
			// 	data: tFormData,
			// 	success: function(oData) {
					var oData = { tCustom: null, tSessions: null, tSpecial: null };
					var oResult = [];

					/* Custom */
					if(oData.tCustom !== null){
						$(oData.tCustom).each(function() {
              oResult.push(this);
            });
					}
					/* Sessions */
					if(oData.tSessions !== null){
						$(oData.tSessions).each(function() {
              oResult.push(this);
            });
					}
					/* Special */
					if(oData.tSpecial !== null){
						$(oData.tSpecial).each(function() {
              oResult.push(this);
            });
					}
					callback(oResult);
				// },
				// error: function(oData){
				// 	console.log(oData);
				// }
			//});
		}
	},
	oSources = [tSources],
	oOptions = {
		locale: 'es',
		lang: 'es',
		timeFormat: 'HH:mm',
		axisFormat: 'HH:mm',
		header: false,
		defaultView: "agendaDay",
		allDaySlot: false,
		slotDuration: '00:20:00',
		slotLabelInterval: '00:20:00',
		minTime: "13:00:00",
		maxTime: "19:00:00",
		longPressDelay: 300,
		eventLimit: true,
		selectable: true,
		editable: false,
		droppable: true,
		selectOverlap: false,
		eventOverlap: false,
		bussinessHours: false,
		contentHeight: "auto",
		eventSources: oSources,
		select: function(pParam1, pParam2) {
			_fGetLapse(oSelf, { vStart: pParam1.local().format('YYYY-MM-DD HH:mm'), vEnd: pParam2.local().format('YYYY-MM-DD HH:mm') });
		},
		eventAfterRender: function(pParam1, pParam2) {

			/* Type Session User Select */
			if(pParam1.vState === "0") {

				/* Check Date */
				if(moment().diff(pParam1.start, 'minutes') <= -30){
					/* Create Cancel Button */
					if(pParam1.vUser === $('#vUser').val() || pParam1.vProf === 3 || pParam1.vProf === 4|| pParam1.vProf === 7){
						var oDelete	= $('<span id="sCancel" data-id='+pParam1.vID+' class="sCancel"><i class="fa fa-remove"></i> Eliminar</span>');
						oDelete.on('click', function(){
							_fDeleteSession(oSelf, this.dataset.id, pParam1);
						});
						$(pParam2).append(oDelete);

						/* Add Price */
						if(!pParam1.vAdded && pParam1.vState === "0") {
							_fPriceUpdate(pParam1.vPrice, 1);
							pParam1.vAdded = true;
						}
					}
				}

			}

			/* Type Session Confirmed */
			if(pParam1.vState === "1") {

				/* Booking for this user */
				if(pParam1.vUser === $('#vUser').val() || pParam1.vProf === 3 || pParam1.vProf === 4|| pParam1.vProf === 7){

					/* Check Date */
					if(moment().diff(pParam1.start, 'minutes') <= -30){
						/* Create Cancel Booking */
						var oCancel	= $('<span id="sCancel" data-id='+pParam1.vID+' class="sCancel"><i class="fa fa-remove"></i> Cancelar</span>');
						oCancel.on('click', function(){
							_fDeleteSession(oSelf, this.dataset.id);
						});
						$(pParam2).append(oCancel);
					}

				}

			}

			/* Type Event Custom */
			if(pParam1.vType === "3") {

			}

			/* Type Event Special */
			if(pParam1.vType === "4") {

			}
		},
		drop: function(date, jsEvent, ui) {
			var vStart 		= date.local().format('YYYY-MM-DD HH:mm');
			var vEnd	 		= date.local().add(20, 'minutes').format('YYYY-MM-DD HH:mm');
			var vProduct 	= ui.helper.data().product;
			var vID 			= ui.helper.data().id;
			_fUseCoupon(oSelf, { vStart: vStart, vEnd: vEnd, vID: vID, vProduct: vProduct}, ui.helper, this);
		},
		eventReceive: function( event ) {
			alert(event)
		},
		eventDrop: function( event, delta, revertFunc, jsEvent, ui, view ) {
			alert(delta);
		},
		loading: function(vParam1) {
			if(vParam1){
				_fLoaderShow();
			}else{
				_fLoaderHide();
			}
		}
	},

	/*----------------------------/
	-  Functions
	/*---------------------------*/
	/* Create Calendar */
	_fCreate = function(pParam1, pParam2) {

		var oDate = { now: vDateNow };
		oOptions = $.extend(oDate, oOptions);
		if(vDateNow.weekday() === 6 || vDateNow.weekday() === 5) {
      oOptions.minTime = "11:00:00";
    }else{
			if(vDateNow.format('YYYY-MM-DD') === '2017-12-08'){
				oOptions.minTime = "11:00:00";
			}else{
				oOptions.minTime = "13:00:00";
			}
		}

		var olOptions = $.extend(pParam2, oOptions);
		$(pParam1).fullCalendar('destroy');
		$(pParam1).fullCalendar(olOptions);

	},

	/* Refresh Calendar */
	_fRefreshCalendar = function(pParam1, pParam2) {

		$(pParam1).fullCalendar('refetchEvents');

	},

	/* Change Date */
	_fChangeDate = function(pParam1, pParam2){
		if(pParam2 === '+1'){
			vDateNow = vDateNow.add(1, 'days');
		}else if(pParam2 === '-1'){
			var vNow		 = moment().startOf('day');
			var vDiff		 = vDateNow.diff(vNow, 'days', true);
			if(vDiff !== 0){
				vDateNow = vDateNow.subtract(1, 'days');
			}
		}
		_fDateLabel();
		$(pParam1).fullCalendar('gotoDate', vDateNow);

		/* Change Time Start */
		if(vDateNow.weekday() === 6 || vDateNow.weekday() === 5) {
      $(pParam1).fullCalendar('option', 'minTime', "11:00:00");
    }else{
			if(vDateNow.format('YYYY-MM-DD') === '2017-12-08'){
				$(pParam1).fullCalendar('option', 'minTime', "11:00:00");
			}else{
				$(pParam1).fullCalendar('option', 'minTime', "13:00:00");
			}
		}

	},

	/* Preselect Session Lapse */
	_fGetLapse = function(pParam1, pParam2){

		var oContainer = pParam1;
		var tFormData = new FormData();
		tFormData.append('vStart', 	pParam2.vStart);
		tFormData.append('vEnd', 		pParam2.vEnd);
		tFormData.append('vType', 		$('#vType').val());
		tFormData.append('vUser', 		$('#vUser').val());
		tFormData.append('vProduct', $('#vProduct').val());

		_fLoaderShow();
		$.ajax('./service/impact/bookingSession/imAdd', {
			processData: false,
			contentType: false,
			dataType: "JSON",
			data: tFormData,
			method: "POST",
			success: function(oData){
				console.log(oData);
				if(typeof oData.sSession !== 'undefined'){
					_fAddSession(oContainer, oData.sSession);
				}
				_fLoaderHide();
			},
			error: function(oData){
				console.log(oData);
				_fLoaderHide();
			}
		});

	},

	/* Preselect Session Lapse */
	_fUseCoupon = function(pParam1, pParam2, pParam3, pParam4){

		var oContainer= pParam1;
		var oCoupon 	= pParam3;
		var oElement 	= pParam4;
		var tFormData = new FormData();
		tFormData.append('vStart', 	pParam2.vStart);
		tFormData.append('vEnd', 		pParam2.vEnd);
		tFormData.append('vType', 		$('#vType').val());
		tFormData.append('vUser', 		$('#vUser').val());
		tFormData.append('vProduct', 	pParam2.vProduct);
		tFormData.append('vParam1', 	pParam2.vID);
		tFormData.append('vCoupon',		pParam2.vID);

		_fLoaderShow();
		$.ajax('./service/impact/bookingCoupon/imAdd', {
			processData: false,
			contentType: false,
			dataType: "JSON",
			data: tFormData,
			method: "POST",
			success: function(oData){
				console.log(oData);
				if(typeof oData.sSession !== 'undefined'){
					_fAddSession(oContainer, oData.sSession);
					if(oData.vState === 'OK'){
						$(oElement).remove();
					}
				}
				_fLoaderHide();
			},
			error: function(oData){
				console.log(oData);
				_fLoaderHide();
			}
		});

	},

	/* Add Session */
	_fAddSession = function(pParam1, pParam2){
		$(pParam1).fullCalendar('renderEvent', pParam2);
	},

	/* Delete Session */
	_fDeleteSession	= function(pParam1, pParam2, pParam3){

		var oContainer 	= pParam1;
		var oEvent			= 'vSession'+pParam2;
		var oParams			= pParam3;
		var tFormData 	= new FormData();
		tFormData.append('idPrincipal', pParam2);
		//if(typeof oParams.vCoupon !== 'undefined'){
			//tFormData.append('vCoupon', oParams.vCoupon);
		//}

		_fLoaderShow();
		$.ajax('./service/impact/bookingDelete/imDelete', {
			processData: false,
			contentType: false,
			dataType: "JSON",
			data: tFormData,
			method: "POST",
			success: function(oData){
				if(oData.vState === 'OK'){
					_fRemoveSession(oContainer, oEvent, oParams);
				}
				_fLoaderHide();
			},
			error: function(oData){
				_fLoaderHide();
				console.log(oData);
			}
		});
	},

	/* Remove Session */
	_fRemoveSession = function(pParam1, pParam2, pParam3){
		$(pParam1).fullCalendar('removeEvents', pParam2);
		if(typeof pParam3 !== 'undefined'){
			if(typeof pParam3.vPrice !== 'undefined'){
			_fPriceUpdate(pParam3.vPrice, -1);
			}
		}
	},

	/* Change Label Date */
	_fDateLabel = function(){
  	$("#sDate").html(vDateNow.format("dddd DD/MM/YYYY"));
	},

	/* Change Product */
	_fChangeProduct = function(pParam1, pParam2, pParam3){
		$('#vProduct').val(pParam2);
		$('#dProduct.turn').each(function() {
			$(this).removeClass('selected');
		});
		$(pParam3).addClass('selected');
	},

	/* Change Price */
	_fPriceUpdate = function(pParam1, pParam2){
		var vValue = 0; //$('#sTotal').html();
		vValue = parseInt(vValue) + (parseInt(pParam1) * pParam2);
		$('#sTotal').html(vValue);
	},

	/* Hide Loader */
	_fLoaderHide = function(){
		$('#dLoading').hide();
	},

	/* Show Loader */
	_fLoaderShow = function(){
		$('#dLoading').show();
	};

	/* jQuery Declare */
	$.fn._mRiders = function(pParam1, pParam2, pParam3){

		oSelf = this;

		if(typeof pParam1 === 'undefined'){
			if(vDateNow === null){
				vDateNow = moment().startOf('day');
				_fDateLabel();
			}
			_fCreate(this, pParam2);
		}else if(pParam1 === 'changeDate'){
			_fChangeDate(this, pParam2);
		}else if(pParam1 === 'newSession'){
			_fGetLapse(this, pParam2);
		}else if(pParam1 === 'changeProduct'){
			_fChangeProduct(this, pParam2, pParam3);
		}else if(pParam1 === 'deleteSession'){
			_fDeleteSession(this, pParam2, pParam3);
		}else if(pParam1 === 'autoRefresh'){
			_fRefreshCalendar(this, pParam2, pParam3);
		}
	};

})(jQuery);

(function($){

	'use strict';

	var
	oSelf,
	/* Change Price */
	_fPriceUpdate = function(pParam1, pParam2){
		var vValue = $(oSelf).find('#sTotal').html();
		vValue = parseInt(vValue) + (parseInt(pParam1) * pParam2);
		$(oSelf).find('#sTotal').html(vValue);
	},

	/* Delete Session */
	_fDeleteSession = function(pParam1, pParam2){
		$('#dCalendar')._mRiders('deleteSession', pParam1, pParam2);
		_fPriceUpdate(pParam2.vPrice, -1);
	},

	/* Confirm Reserves for User */
	_fConfirmReserves = function(pParam1, pParam2, pParam3){

		var oConfirm	= pParam1;
		var tFormData	= new FormData();
		tFormData.append('vUser', $('#vUser').val());

		$.ajax('./service/impact/confirmSessions/imAdd', {
			dataType: "JSON",
			method: "POST",
			processData: false,
			contentType: false,
			data: tFormData,
			success: function(oData) {
				if(oData.vState === 'OK'){
					$('#dConfirm').modal('hide');
					$('#dCalendar')._mRiders('autoRefresh');
					$('#dSuccess').modal('show');
				}
			},
			error: function(oData){
				console.log(oData);
			}
		});

	},

	/* Modal Reserves Complete */
	_fModalReserves = function(pParam1, pParam2, pParam3){

		var oConfirm	= pParam1;
		var tFormData	= new FormData();
		tFormData.append('vUser', $('#vUser').val());

		$(oConfirm).find('#dList').html('<div class="dSession dHeader"><div class="dTime"><h5>Horario</h5></div><div class="dProduct"><h5>Sesion</h5></div><div class="dPrice"><h5>Precio</h5></div><div class="dAction"><h5>AcciÃ³n</h5></div></div>');

		$.ajax('./get/json/booking/user', {
			dataType: "JSON",
			method: "POST",
			processData: false,
			contentType: false,
			data: tFormData,
			success: function(oData) {

				var vTotal=0;
				/* Sessions */
				if(oData.tSessions !== null){
					$(oData.tSessions).each(function() {
						var tContent	= this;
						var oSession	=	$('<div id="dSessionItem" class="dSession" data-id="'+this.vID+'"></div>');
						oSession.append('<div class="dTime"><h5>'+this.vTime+'</h5></div>');
						oSession.append('<div class="dProduct"><h5>'+this.vProduct+'</h5></div>');
						oSession.append('<div class="dPrice"><h5>'+this.vPrice+'</h5></div>');
						var oActions = $('<div class="dAction"></div>');
						var oDelete = $('<h5 data-id="'+this.vID+'"><i class="fa fa-close fa-fw"></i> Quitar</h5>');
						oDelete.on('click', function(){
							_fDeleteSession(this.dataset.id, tContent);
							oSession.hide();
						});
						oActions.append(oDelete);
						oSession.append(oActions);

						if(typeof this.vPrice !== 'undefined' || this.vPrice !== null){
							vTotal = vTotal + this.vPrice;
						}

						$(oConfirm).find('#dList').append(oSession);
					});
				}
				$(oConfirm).find('#sTotal').html(vTotal);

			},
			error: function(oData){
				console.log(oData);
			}
		});
	};

	/* jQuery Declare */
	$.fn._mContent = function(pParam1, pParam2, pParam3){

		oSelf = this;
		if(pParam1 === 'getReserves'){
			_fModalReserves(this, pParam2, pParam3);
		}else if(pParam1 === 'confirmReserves'){
			_fConfirmReserves(this, pParam2, pParam3);
		}
	};

})(jQuery);

/*----------------------------------------------------------------------/
/* Custom Buttons Events - Cropper Init
/*---------------------------------------------------------------------*/
var _fCropperImport = function(pID, pPreviewID, pImgContainer){

	'use strict';

	var oImgContainer = $("#"+pImgContainer);

	$('#'+pID).fadeIn(2000);
	$('#'+pPreviewID).fadeOut(300);

	oImgContainer.find("#btnSaveImage").attr('disabled', false);

};

/*----------------------------------------------------------------------/
/* Funcion para finalizar el servicio
/*---------------------------------------------------------------------*/
var _fFinishService = function(pCropper){

	'use strict';

	var spState = $('#spProfile');

	/* State of Proccess */
	spState.fadeIn(1500);
	spState.html('<i class="fa fa-refresh fa-refresh-animate fa-fw"></i> Procesando');

	/* Add Post Information */
	tFormData.append('vRelation', 		$('#vRelation').val());
	tFormData.append('vName', 				$('#vName').val());
	tFormData.append('vCategory', 		$('#vCategory').val());

	/* Ajax Post Service */
	$.ajax('./service/impact/imageSet/imAdd', {
		method: "POST",
		data: tFormData,
		processData: false,
		contentType: false,
		success: function (oData) {
			if(typeof oData === 'object'){
				if(oData.vState === 'OK'){
					spState.hide();
					spState.fadeIn(1500);
					spState.html('<i class="fa fa-check fa-fw"></i> Guardado');
				}else{
					spState.hide();
					spState.fadeIn(1500);
					spState.html('<i class="fa fa-close fa-fw"></i> ReintentÃ¡');
				}
			}else{
				spState.hide();
				spState.fadeIn(1500);
				spState.html('<i class="fa fa-close fa-fw"></i> ReintentÃ¡');
			}
		},
		error: function (oData) {
			alert(oData);
		}
	});

	pCropper.destroy();

};

/*----------------------------------------------------------------------/
/* Funcion para custom
/*---------------------------------------------------------------------*/
var _fParametersBlob	= function(oBlob){
	'use strict';
	tFormData.append('vImage', 	oBlob);
	tFormData.append('vSize', 		oBlob.size);
	tFormData.append('vType', 		oBlob.type);
};

/*----------------------------------------------------------------------/
/* Funcion para constuir oCropper en Imagen
/*---------------------------------------------------------------------*/
var _fBuildImageCrop = function(vContainerID, vPreviewID, vImportID, oOptions, pImgContainer){

	'use strict';

  var Cropper 		= window.Cropper;
  var eContainer 	= document.querySelector('#'+vContainerID);

	if(eContainer !== null){
		var eImage 			= eContainer.getElementsByTagName('img');
		if(eImage !== null){
			eImage 					= eImage.item(0);

			var aOptions = oOptions;
			var oCropper;

			/* Get Container Image */
			var oImgContainer = $("#"+pImgContainer);
			if(!oImgContainer.length){ oImgContainer = $(document); }

			// Import image
			var eImport 	= oImgContainer.find("#"+vImportID);
			var ePreview 	= document.getElementById(vPreviewID);
			var vUrl 			= window.URL || window.webkitURL;
			var vBlobURL;

			if(vUrl) {

				eImport.on('change', function () {
					var vFiles = this.files;
					var vFile;
					oCropper = new Cropper(eImage, aOptions);

					if (oCropper && vFiles && vFiles.length) {
						vFile = vFiles[0];

						if (/^image\/\w+/.test(vFile.type)) {
							vBlobURL = vUrl.createObjectURL(vFile);
							oCropper.reset().replace(vBlobURL);
							eImport.value = null;
							if($(ePreview).length){ $(ePreview).html(''); }
							var vID = $(oCropper.element).attr('id');
							oImgContainer.find("#btnSaveImage").attr('disabled', false);
							_fCropperImport(vID, vPreviewID, pImgContainer);
							//_fExitCropper(vID, vPreviewID, eImport, oCropper);
						} else {
							window.alert('Please choose an image file.');
						}
					}
				});
			} else {
				eImport.disabled = true;
				eImport.parentNode.className += ' disabled';
			}

			/* Import File */
			if(oImgContainer.find("#btnImport").length){
				oImgContainer.find("#btnImport").on("click", function(){
					eImport.click();
				});
			}

			/* Image Save */
			if(oImgContainer.find("#btnSaveImage").length){

				oImgContainer.find("#btnSaveImage").on("click", function(){

					var oNewImage   = oCropper.getCroppedCanvas();

					oImgContainer.find('#'+vContainerID).fadeOut(300);
					oImgContainer.find('#'+vPreviewID).fadeIn(2000);

					oImgContainer.find("#btnSaveImage").attr('disabled', true);
					oImgContainer.find('#'+vPreviewID).html(oNewImage);

					oNewImage				= $(oNewImage);
					/* Save Image */
					if(oNewImage.length){

						/* Create Form Post Data */
						tFormData    = new FormData();
						oNewImage 	= oNewImage[0];

						tFormData.append('vWidth', 	parseInt(oNewImage.width));
						tFormData.append('vHeight', 	parseInt(oNewImage.height));

						oNewImage.toBlob(function(oBlob){
							/* Charge Image Parameters */
							_fParametersBlob(oBlob);
							/* Finish Service With Image */
							_fFinishService(oCropper);
						});
					}

				});
			}

			return oCropper;

		}else{
			return false;
		}
	}else{
		return false;
	}

};