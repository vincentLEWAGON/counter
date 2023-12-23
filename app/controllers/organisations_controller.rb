class OrganisationsController < ApplicationController
  def index
    @organisations = Organisation.all
  end

  def show
  end

  def new
    @organisation = Organisation.new
  end

  def create
    @organisation = Organisation.new(name: params[:name], address: params[:address], postal_code: params[:postal_code], city: params[:city])
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
end
