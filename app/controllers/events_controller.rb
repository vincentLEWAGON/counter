class EventsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_event, only: %i[show edit update destroy increment_audience decrement_audience]

  def index
    @events = current_user.events.order(:name)
    @next_events = Event.where('start_date >= ?', Time.now)
    @past_events = @events - @next_events
  end

  def show
    @audience = 0
    @entry_exits = @event.entry_exits.order(:timestamp)
  end

  def increment_audience
    @event.increment!(:audience)
    @event.entry_exits.create(action: 'increment', timestamp: Time.now)
    render json: { audience: @event.audience }
  end

  def decrement_audience
    @event.decrement!(:audience)
    @event.entry_exits.create(action: 'decrement', timestamp: Time.now)
    render json: { audience: @event.audience }
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      redirect_to organization_events_path(current_user.organizations), data: 'Event was successfully created.'
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @event.update(event_params)
      redirect_to events_path, notice: 'Event was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @event.memberships.destroy_all
    @event.destroy
    redirect_to events_url, notice: 'Event was successfully destroyed.'
  end

  private

  def find_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:name, :description, :start_date, :start_time, :max_gauge, :organization_id)
  end
end
