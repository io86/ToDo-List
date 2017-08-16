$(document).ready(function () {
    
    //Function, Add new item in the List
    function addListItem() {
        var $newListItem,
            $listItem = $(':text'),
            $iconDelete = '<span class="glyphicon glyphicon-remove delete"></span>';
        
        if ($listItem.val() === '') {
            alert('You must write something');
        } else {
            $newListItem = '<li>' + $listItem.val() + $iconDelete + '</li>';
            $('ol').append($newListItem);
            $listItem.val('');
        }
    }
      
    //Function, Delete an item from the List
    function deleteItem() {
        $(this).parent().remove();
    }
    
    //Text decoration for completed tasks
    function textDecoration() {
        $(this).css({'text-decoration': 'line-through', 'background-color': '#D3D2D2', 'border-bottom': '1px solid #A9A3A3'});
    }
    
    //Add functions on events
    $(document).on('click', '#btn-add', addListItem);
    $(document).on('click', '.delete', deleteItem);
    $(document).on('click', 'li', textDecoration);
    $(document).on('mouseover', 'li', pointer);
	
	
});