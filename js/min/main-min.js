$(document).ready(function(){function e(e,a){$.ajax({url:"https://yts.ag/api/v2/list_movies.jsonp?page="+e+"&limit=50&query_term="+a,type:"GET",dataType:"json",beforeSend:function(){$("#wholecontainer").fadeOut(1),$("#footer").fadeOut(1),$("#pulse").fadeIn("fast")},error:function(e,a,t){console.warn(e,a,t)},success:function(e){console.log(e),$("#pulse").fadeOut(1),$("#wholecontainer").fadeIn("slow"),$("#footer").fadeIn("slow"),$("#pagecount").html(r),t.empty();var a=e.data;a.movie_count<50?($("#nextpage").hide(),$("#prevpage").hide(),$("#backbtn").show()):($("#nextpage").show(),$("#backbtn").hide());var i=a.movies;for(var o in i){var f=i[o],s=f.title,d=f.id,l=f.rating,p=f.year,c=f.torrents,u=f.mpa_rating;u||(u="Not-Rated");var h=n.clone();h.find("#id").html(d),h.find("#name").html(s),h.find("#name").attr("data-id",d),h.find("#rating").html(l),h.find("#year").html(p),h.find("#mparating").html(u),h.find("#torrent1").attr("href",c[0].url),h.find("#seeds").html(c[0].seeds),$("#container").append(h)}}})}var a=$("table").stupidtable();a.on("aftertablesort",function(e,a){var t=$(this).find("th");t.find(".arrow").remove();var n=$.fn.stupidtable.dir,r=a.direction===n.ASC?'<i class="fa fa-angle-up"></i>':'<i class="fa fa-angle-down"></i>';t.eq(a.column).append('<span class="arrow">'+r+"</span>")});var t=$("#container"),n=$("#template").clone(),r=1,i=" ";$("#prevpage").hide(),$("#pagecount").html(r),e(r,i),$("#nextpage").click(function(a){a.preventDefault(),r++,e(r,i),r>1&&$("#prevpage").show()}),$("#prevpage").click(function(a){a.preventDefault(),r--,e(r,i),2>r&&$("#prevpage").hide()}),$("#searchform").on("submit",function(a){a.preventDefault(),i=$(this).find("#searchquery").val(),$(this).find("#searchquery").val(""),r=1,e(1,i)})});