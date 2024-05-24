from djongo import models

class User(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.name
