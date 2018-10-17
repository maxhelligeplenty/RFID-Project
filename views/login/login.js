$( document ).ready(function() {
    var numblock = document.getElementById('numblock');
    numblock.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            validate(numblock);
        }
    });

    function validate(input)
    {
        var inputValue = input.value;
        input.className = 'invalid';
        if(inputValue.length >= 4)
        {
            input.className = '';
            if(Number(inputValue) === 1234)
            {
                addAlert('success', 'Successfully logged in');
            }
            else
            {
                addAlert('failed', 'Failed to login');
            }
        }
        else
        {
            addAlert('invalid', 'Code must contain 4 numbers');
        }
    }

    function addAlert(type, message)
    {
        var alertContainer = document.getElementById('alert-container');
        alertContainer.innerHTML += '<div id="' + type + '" class="alert ' +  type + '"><span>' + message + '</span></div>';
        setTimeout(function(){ closeAlert(type); }, 5000);
    }

    function closeAlert(identifier)
    {
        var alert = document.getElementById(identifier);
        alert.parentNode.removeChild(alert);
    }
});
