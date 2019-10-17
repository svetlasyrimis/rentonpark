!(function(e) {
  "function" == typeof define && define.amd
    ? define(["jquery", "moment"], e)
    : "object" == typeof exports
    ? (module.exports = e(require("jquery"), require("moment")))
    : e(jQuery, moment);
})(function(e, a) {
  !(function() {
    var e = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
        "_"
      ),
      o = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
      s = a.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
          "_"
        ),
        monthsShort: function(a, s) {
          return /-MMM-/.test(s) ? o[a.month()] : e[a.month()];
        },
        monthsParseExact: !0,
        weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split(
          "_"
        ),
        weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
          sameDay: function() {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextDay: function() {
            return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextWeek: function() {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastDay: function() {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastWeek: function() {
            return (
              "[el] dddd [pasado a la" +
              (1 !== this.hours() ? "s" : "") +
              "] LT"
            );
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un dÃ­a",
          dd: "%d dÃ­as",
          M: "un mes",
          MM: "%d meses",
          y: "un aÃ±o",
          yy: "%d aÃ±os"
        },
        ordinalParse: /\d{1,2}Âº/,
        ordinal: "%dÂº",
        week: { dow: 1, doy: 4 }
      });
    return s;
  })(),
    e.fullCalendar.datepickerLocale("es", "es", {
      closeText: "Cerrar",
      prevText: "&#x3C;Ant",
      nextText: "Sig&#x3E;",
      currentText: "Hoy",
      monthNames: [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
      ],
      monthNamesShort: [
        "ene",
        "feb",
        "mar",
        "abr",
        "may",
        "jun",
        "jul",
        "ago",
        "sep",
        "oct",
        "nov",
        "dic"
      ],
      dayNames: [
        "domingo",
        "lunes",
        "martes",
        "miÃ©rcoles",
        "jueves",
        "viernes",
        "sÃ¡bado"
      ],
      dayNamesShort: ["dom", "lun", "mar", "miÃ©", "jue", "vie", "sÃ¡b"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      weekHeader: "Sm",
      dateFormat: "dd/mm/yy",
      firstDay: 1,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }),
    e.fullCalendar.locale("es", {
      buttonText: { month: "Mes", week: "Semana", day: "DÃ­a", list: "Agenda" },
      allDayHtml: "Todo<br/>el dÃ­a",
      eventLimitText: "mÃ¡s",
      noEventsMessage: "No hay eventos para mostrar"
    });
});
