var projects = [];
$(function() {
  $(".project_thumb").live("click", function() {
    var key = $(this).attr("id").replace("project_", "");
    var project = projects[key];
    $('#project_large_image').html("<img src='"+project.large_image+"' />");
    $('#project_name').text(project.name);
    $('#project_created_on').text(project.created_on);
    $('#project_description').html(project.description);
    return false;
  });
  $.getJSON("data.json", function(data) {
    projects = data;
    $.each(projects, function(key, project) {
       $("#projects_carousel ul")
         .append(
           $('<li style="background-image: url(\''+project.thumb_image+'\');" class="project_thumb" id="project_'+key+'"></li>')
             .append(
               $('<a href="#" class="project_link"></a>')
                 .append('<img src="custom/images/glossy_box_1.png" width="201" height="127" />')
             )
         );
    });
    $("#projects_carousel").jCarouselLite({
      btnNext: "#arrow_next",
      btnPrev: "#arrow_previous",
      visible: 4,
      scroll: 4
    });
  });
});
