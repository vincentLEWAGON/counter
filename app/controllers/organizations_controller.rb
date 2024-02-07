# app/controllers/organizations_controller.rb
class OrganizationsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_organization, only: %i[show edit update destroy]

  def index
    @organizations = current_user.organizations
  end

  def show
  end

  def new
    @organization = Organization.new
  end

  def create
    @organization = Organization.new(organization_params)

    if @organization.save
      current_user.memberships.create(organization: @organization)
      redirect_to organizations_path, notice: 'Organization was successfully created.'
    else
      render :new
    end
  end


  def edit
    redirect_to organizations_path, notice: 'Organization was successfully update.'
  end

  def update
    if @organization.update(organization_params)
      redirect_to organizations_path, notice: 'Organization was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @organization.destroy
    redirect_to organizations_path, notice: 'Organization was successfully destroyed.'
  end


  private

  def find_organization
    @organization = Organization.find(params[:id])
  end

  def organization_params
    params.require(:organization).permit(:name)
  end
end
