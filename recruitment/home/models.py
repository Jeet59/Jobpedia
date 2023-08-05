from mongoengine import Document, StringField, DateTimeField, ImageField


class JobList(Document):
    title = StringField(max_length=100, required=True)
    company = StringField(max_length=100, required=True)
    description = StringField(required=True)
    location = StringField(max_length=50, required=True)
    company_logo = ImageField()

    def __str__(self):
        return self.title


class Candidates(Document):
    name = StringField(max_length=100, required=True)
    resume = StringField(max_length=100, required=True)
    experience = StringField(max_length=100, required=True)
    bio = StringField(max_length=250, required=True)
    domain = StringField(max_length=250, required=True)

    def __str__(self):
        return self.title
