
        function addEmployee(){
            var modal = document.getElementById("add-employee-modal-id");
            modal.style.display="block";
        }
        function closePopUp(){
            var modal = document.getElementById("add-employee-modal-id");
            modal.style.display="none";
        }
        window.onclick = function(event){
            var modal = document.getElementById("add-employee-modal-id");
            if(event.target== modal){
                modal.style.display = "none";
            }
        }