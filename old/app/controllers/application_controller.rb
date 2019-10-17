class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:password, :password_confirmation, :current_password, :email, :name, :lastname, :phone, :phone_prefix, :sex) }
  end
end