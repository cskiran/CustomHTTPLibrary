function easyHttp(){
  this.http = new XMLHttpRequest();
}

//creating a methode  get for HTTP GET request:
easyHttp.prototype.get = function (url,callback){
  this.http.open('GET',url,true);
   
  var self = this;

  this.http.onload = function(){
    if(self.http.status === 200){
       callback(null,self.http.responseText);
    }else{
      callback('error : '+self.http.status);
    }
  }

  this.http.send();
}

//Methode for making POST request :
easyHttp.prototype.post = function(url,data,callback){
  this.http.open('POST',url,true);
  this.http.setRequestHeader('Content-type','application/json');

  let self = this;
  this.http.onload = function(){
    callback(null,self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


//Methode for making PUT request:
easyHttp.prototype.put = function(url,data,callback){
  this.http.open('PUT',url,true);
  this.http.setRequestHeader('content-type','application/json');

  let self = this;
  this.http.onload = function(){
    callback(null,self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

//Methode for making delete request : 
easyHttp.prototype.delete = function(url,callback){
  this.http.open('DELETE',url,true);
  let self = this; 
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null,'post deleted');
    }else{
      callback('error : '+self.http.status);
    }
    
  }
  this.http.send()
}