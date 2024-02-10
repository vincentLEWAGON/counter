
Event.destroy_all
Organization.destroy_all

user1 = User.create(email: 'milo@free.fr', password: 'password')
user2 = User.create(email: 'maia@free.fr', password: 'password')

User.all.each do |user|
  2.times do |i|
    @organization = Organization.create!(name: "theatre#{i+1} de #{user.email}")
    Membership.create(user: user, organization: @organization)
  end
  puts "organisations created"
end

Organization.all.each do |organization|
  Event.create!(
    name: "événement1 de #{organization.name}",
    description: "description de l'événement1 de #{organization.name}",
    start_date: Date.today - 1.day,
    start_time: DateTime.now.change({ hour: 20, min: 0, sec: 0 }),
    max_gauge: rand(10..1000),
    organization: organization
  )
  Event.create!(
    name: "événement2 de #{organization.name}",
    description: "description de l'événement2 de #{organization.name}",
    start_date: Date.today + 1.day,
    start_time: DateTime.now.change({ hour: 20, min: 0, sec: 0 }),
    max_gauge: rand(10..1000),
    organization: organization
  )
  puts "events created"
end
