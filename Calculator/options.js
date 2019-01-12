//options.js
//Part of Calculator Google Extension
//Arun Hari Anand
//Adapted from the tutorial found on https://www.youtube.com/watch?v=5aE1bAwyPXQ&index=26&list=PLC3y8-rFHvwg2-q6Kvw3Tl_4xhxtIaNlY
//Adapted from code found in https://github.com/arunhari-anand/Chrome-Extensions/tree/master/BudgetManager

$(function(){

    chrome.storage.sync.get('limit',function(calc){
        $('#limit').val(calc.limit);
    });

    $('#Add').click(function(){
        chrome.storage.sync.set({'add': 0}, function(){
            close();
        });
    });

    $('#Subtract').click(function(){
        chrome.storage.sync.set({'add': 1}, function(){
            close();
        });
    });

    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total': 0});
        close();
    });
});