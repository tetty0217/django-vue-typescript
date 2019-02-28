from django.shortcuts import render


def index(request, **kwargs):
    context = {'name': 'tetty'}
    return render(request, 'home/index.html', context)
