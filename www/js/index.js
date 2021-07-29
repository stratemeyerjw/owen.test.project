//wait for page to load and do something.
$(()=>{



//make an asyncronous function called gettestdata
  getTestData = async ()=>{
      
    //this will stop the client page if you hit control + shift + j and have your developer tools open in in ms edge or google chrome. 
    //  debugger
      
    
    //this is how you fetch data from a router in your application (the router folder)
        var data = await $.getJSON('/testData');

    //this is how to get a propery from json
    var users = data.users;
    //which returns an array. to make it a comma seperated string you would do:
    var users = users.join(',');
    //stuff all users inside a div on your page called messagebox
        $('#messageBox').html(users);
        
        //make the messagebox grow and move at the same time over a period of 10 seconds
        $('#messageBox').animate({
            'font-size': '+=50', 
            'margin-top': '+=500',
            'margin-left': '+=500',
        },10000);
    }

    getTestData2 = async ()=>{
      
        //this will stop the client page if you hit control + shift + j and have your developer tools open in in ms edge or google chrome. 
        //  debugger
          
        
        //this is how you fetch data from a router in your application (the router folder)
            var data = await $.getJSON('/testData2');
    
        //this is how to get a propery from json
        var users = data.users;
        //which returns an array. to make it a comma seperated string you would do:
        var users = users.join(',');
        //stuff all users inside a div on your page called messagebox
            $('#messageBox').html(users);
            
            //make the messagebox grow and move at the same time over a period of 10 seconds
            $('#messageBox').animate({
                'font-size': '+=50', 
                'margin-top': '+=500',
                'margin-left': '+=500',
            },10000);
        }


    //set a timer to call the asynchronous function to get data and put it in our messagebox

    setTimeout(()=>{
        
        getTestData();

        //call the second ajax get call (getJSON)
        setTimeout(()=>{
            $('#messageBox').animate({'opacity': 0}, 1000, ()=>{
             //after opacity hits 0 fetch data
             getTestData2();
             //after data is fetched.
             $('#messageBox').animate({'opacity':1}, 1000);
            });
          
        },3000)
    },3000)
  
})