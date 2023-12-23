class OrganisationsController < ApplicationController
  def index
    @organisations = current_user.organisations
    @organisation = Organisation.new
  end

  def show
  end

  def new
    @organisation = Organisation.new
  end

  def create
    @organisation = Organisation.new(organisation_params)
    if @organisation.save
      redirect_to organisation_path(@organisation.id), notice: 'Organisation créée'
    else
      render :new, alert: 'Organisation non créée'
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def organisation_params
    params.require(:organisation).permit(:name, :address, :postal_code, :city)
  end


end
