require 'faker'

10.times do 

    mail = Email.create(object: Faker::Lorem.sentence(word_count: 3), body: Faker::Lorem.sentence(word_count: 20))

end
