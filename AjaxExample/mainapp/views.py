from django.shortcuts import render
from urllib.request import Request, urlopen
import json
from django.http import JsonResponse
# Create your views here.



def get_index(request):
    return render(request,'index.html')

def add_api(request):
    data = request.body.decode()
    Data = json.loads(request.body.decode())
    Text = str("資料回傳成功")

    A= Data['A']
    B = Data['B']
    result = A + B

    return JsonResponse({
            # 'List':list,
            'result': result,
            'Text' : Text,
                })         
