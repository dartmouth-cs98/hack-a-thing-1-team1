//popup.js
//Part of Calculator Google Extension
//Arun Hari Anand
//Adapted from the tutorial found on https://www.youtube.com/watch?v=5aE1bAwyPXQ&index=26&list=PLC3y8-rFHvwg2-q6Kvw3Tl_4xhxtIaNlY
//Adapted from code found in https://github.com/arunhari-anand/Chrome-Extensions/tree/master/BudgetManager

$(function(){

    chrome.storage.sync.get(['total'],function(calc){
        $('#total').text(calc.total);
    });

    $('#calculate').click(function(){

        chrome.storage.sync.get(['add'], function(sign){

            var positive = 0;
            if (sign.add){
                positive+=sign.add;
            }

            if (positive == 0){
                chrome.storage.sync.get(['total'],function(calc){
                    var newTotal = 0;
                    if (calc.total){
                        newTotal += parseInt(calc.total);
                    }

                    var operand = $('#operand').val();
                    if (operand){
                        newTotal += parseInt(operand);
                    }

                    chrome.storage.sync.set({'total': newTotal});
                    $('#total').text(newTotal);
                    $('#operand').val('');

                

                });
            }

            else{
                chrome.storage.sync.get(['total'],function(calc){
                    var newTotal = 0;
                    if (calc.total){
                        newTotal += parseInt(calc.total);
                    }

                    var operand = $('#operand').val();
                    if (operand){
                        newTotal -= parseInt(operand);
                    }

                    chrome.storage.sync.set({'total': newTotal});
                    $('#total').text(newTotal);
                    $('#operand').val('');

                

                });
            }

        });
    });
});