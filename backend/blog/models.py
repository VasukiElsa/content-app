from djongo import models

class HistoricalEcho(models.Model):
    _id = models.ObjectIdField()
    title = models.CharField(max_length = 255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    cover = models.ImageField(upload_to = 'images/')

    def __str__(self):
        return self.title
    
class Contents(models.Model):
    _id = models.ObjectIdField()
    label = models.CharField(max_length=255)
    value = models.TextField()
    historical_echo = models.ForeignKey(HistoricalEcho, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.label}"
    