function GridView(component, model){
    this.ViewModel = model;
    this.Component = component;

    this.createHeaderTable = function(){
        this.table = $("<table/>", {id: "grid", class: "table"});
        this.Component.append(this.table);
        $('#grid').append("<thead><tr></tr></thead>");
        var headers = Object.keys(this.ViewModel[0]);
        headers.forEach(function (e){
            $("#grid thead tr").append("<th>" + e + "</th>")
        });
    }

    this.createBodyTable = function(){
        console.time();
        $('#grid thead').after("<tbody></tbody>");
        var insertLine = $("#grid tbody");
        this.ViewModel.forEach(function (e, i){   
            var body = Object.values(e);
            insertLine.append("<tr></tr>");
            body.forEach(function (e){
                $("#grid tbody tr:last-child").append("<td>" + e + "</td>")
            });
        });
        console.timeEnd();
    }
}

function freeze(id){
    this.table = $(id);
    this.thead = table.find('thead');
    this.fixed_thead = null;
    this.fixed_table_wrapper = null;
    this.fixed_table = $('<table />', {
      'cellpadding': 5,
      'cellspacing': 0,
      'id': 'fixed_table_header'
    });
    
      
    if($('#fixed_table_wrapper').length === 0){
        this.thead.find('th').each(function() {
        $(this).css('width', $(this).width());
        });
    
        this.fixed_thead = this.thead.clone();

        this.fixed_table_wrapper = $('<div />', {
            'id': 'fixed_table_wrapper',
            'height': 400,
            'css': {
                'overflow': 'auto'
            }
        });

        this.table.before(this.fixed_table);
        this.fixed_table.append(this.fixed_thead);
        $("#fixed_table_header").addClass("table");

        this.thead.css('visibility', 'collapse');
        $("#fixed_table_header").css('margin-bottom', '0px');
        this.table.wrap(this.fixed_table_wrapper);
    }
    // align the new table header with the original table
    //fixed_table.css('left', (fixed_table.offset().left - table.offset().left) * -1);
 }  

