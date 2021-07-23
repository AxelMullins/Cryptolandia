        $(document).ready(function () {
            $("#myInput").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $("#myList div").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });