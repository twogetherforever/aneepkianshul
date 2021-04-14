const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
var customBaseURL = (typeof customDomainBaseURL === 'undefined') ? "" : customDomainBaseURL;
var siteId, weddingDateInterval, liveStreamInterval, guestPartyInterval, visible_sec, registrySection, registryCloseStatus, wishlist_id, bestsellersUrl, total_registry_products, resolution, postWeddingPurchased,virtual_services_details;
var sections = [], currentTrigger = '', device = '', registry_type = '', content_data = {}, liveStreamState = '', guestPartyState = '', productLoaded = false, virtualWeddingLoaded = false,rsvp_manager_enabled=0;
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], layoutFour = ['theme24'];
var otherOccasionPath = ['baby-registry'], sitePathName = window.location.pathname.split('/')[1];
var doc_html_loaded=0;
var rsvp_manager_exceptions = ['19417', '20826', '22831', '33612', '34178', '35302', '39957', '41001', '43396', '43625', '45240', '46013', '46255', '52842', '58985', '60203', '63474', '64708', '64796', '73964', '77470', '99123', '135605', '137785', '148540', '9116', '107496', '157922', '162660', '162709', '162794', '162807', '162821', '162847', '162898', '162957', '162962', '162858', '163090', '163034', '163715', '163733', '163760', '164003', '164919', '165523', '165764', '167782', '168806', '169083', '169125', '169245', '169285', '169371', '169178', '169435', '169569', '169429', '169442', '169595', '169626', '169597', '169656', '169743', '169812', '169820', '169824', '169993', '170035', '170036', '170039', '170137', '170238', '170274', '169798', '170472', '170491', '170583', '170675', '170822', '170886', '170907', '171017', '171046', '171059', '171150', '171276', '171350', '171376', '170558', '171468', '171469', '171441', '171551', '171491', '171598', '171608', '171634', '171642', '171726', '170452', '171876', '171901', '171919', '171935', '172332', '172356', '170471', '172352', '172450', '172394', '171914', '172731', '172759', '172760', '172778', '172791', '172809', '172963', '172671', '173163', '173214', '173303', '173344', '173343', '173311', '169751', '173586', '173722', '173727', '173726', '173764', '173803', '173436', '173819', '173825', '173833', '173858', '173942', '173951', '173961', '174002', '174111', '174087', '174032', '174241', '174256', '173903', '174388', '174412', '174414', '172522', '174590', '174607', '174632', '174805', '174822', '174939', '174981', '174137', '174997', '175043', '175141', '175186', '175177', '175395', '175447', '175306', '175513', '175604', '175598', '175781', '175800', '176087', '175689', '176353', '176387', '176416', '176425', '176490', '176517', '176263', '176563', '176643', '176703', '176739', '176744', '176787', '176879', '176883', '176906', '176977', '177066', '177241', '177278', '177285', '177292', '177309', '177347', '177405', '177419', '177311', '177330', '177457', '177396', '174736', '177637', '176556', '177651', '177692', '177994', '178000', '178086', '176478', '178322', '178338', '178457', '178392', '177302', '178345', '178643', '176929', '178897', '178766', '179055', '179192', '179351', '178889', '178871', '179424', '179023', '179616', '179658', '179715', '179778', '179479', '179575', '179863', '178497', '179925', '179984', '179986', '180039', '180071', '180166', '180173', '180258', '179894', '180397', '180412', '180468', '180199', '180404', '181066', '181093', '181268', '179554', '181399', '181583', '181356', '181739', '181737', '181477', '181789', '181887', '181632', '182121', '182313', '182439', '182601', '179091', '203675', '203770', '203771', '203803', '203823', '203844', '203871', '204083', '204153', '204191', '204195', '204362', '204363', '204398', '204404', '204479', '204515', '204669', '204721', '204797', '204827', '204114', '204928', '204947', '173656', '205156', '205167', '205234', '205236', '205246', '205266', '205335', '205360', '205203', '205290', '205188', '205589', '205603', '205634', '205648', '205667', '205717', '205762', '205832', '205839', '205845', '205861', '205907', '205945', '205984', '204135', '206220', '206236', '206239', '206244', '206275', '206389', '206394', '206377', '206345', '206466', '206486', '206513', '206515', '206502', '206484', '206590', '206653', '206655', '206673', '206692', '206637', '206783', '206866', '206721', '206920', '206932', '206994', '207026', '207042', '207058', '207103', '207108', '206332', '207142', '207158', '207244', '207111', '207279', '206217', '207324', '207333', '207358', '207379', '207390', '207389', '207453', '207521', '207531', '207537', '207573', '207584', '207593', '207645', '207707', '207722', '207761', '207620', '207784', '207809', '207896', '207808', '207933', '207940', '207945', '207966', '208027', '207209', '208100', '208140', '208163', '208167', '208168', '208174', '208206', '208231', '208233', '207360', '207007', '208241', '208264', '208378', '208407', '208422', '208423', '208434', '208445', '208461', '208497', '208517', '208490', '208550', '208508', '208560', '208619', '208642', '208644', '208674', '208659', '208679', '208703', '208747', '208742', '208784', '208826', '208860', '208865', '208872', '208901', '208903', '208908', '208919', '208922', '77470', '208871'];
/* Get Registry Url block starts */
var QueryString = function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        /* If first entry with this name */
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            /* If second entry with this name */
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            /* If third or later entry with this name */
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}();
if (QueryString.pwa) {
    regurl = QueryString.url.toLowerCase();
    jQuery('body').addClass('pwa-view');
    if (layoutFour.indexOf(siteTheme) > -1) { updateWeddingContentPosition(); }
    $("#wishlist-gifts-header-1").hide();
    $("#gallery-header-1").hide();
    $("#rsvp-head-title-1").hide();
    $("#wishlist-gifts").hide();
    $("#gallery").hide();
    $("#photo_gallery").hide();
    $("#rsvp").hide();
    $('#gift_registry').hide();
    $('.nav-item.gift_registry').hide();
    $('.powered-by-footer').hide();
}
if (!regurl || regurl === null || regurl === '') {
    if (QueryString.guest && QueryString.guest == 0) {
        coupleView = 1;
        regurl = QueryString.url.toLowerCase();
    } else if (QueryString.viewasguest && QueryString.viewasguest == 1) {
        regurl = QueryString.url.toLowerCase();
    } else {
        var urlsplit = window.location.href.split("/");
        var username = (urlsplit[3] == 'baby-registry' && urlsplit[4] != '') ? urlsplit[4] : urlsplit[3];
        if (username.indexOf('?') !== -1) {
            xx = username.split('?');
            regurl = xx[0].toLowerCase();
        } else if (username.indexOf('#') !== -1) {
            xx = username.split('#');
            regurl = xx[0].toLowerCase();
        } else {
            regurl = username.toLowerCase();
        }
    }
}
/* Get Registry Url block ends */

/* Common function calls and On-Click Events Starts */
$(document)
    .ready(function () {
        getJsonData();checkGuestBookStatus(); loadExtraElements();getLiveStreamDetails();
        jQuery('body').append(`<div class="modal" id="update_rsvp_modal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close close-addgoogleguest" data-dismiss="modal">&times;</button>
                    <div id="header-title" class="sub-title-font">Update RSVP</div>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-xs-12 basic-text-font pb-25" id="update-msg">
                                Update your previous RSVP?
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a id="update_rsvp_action" class="red-button half-width basic-text-font text-bold-600 white-text text-uppercase">Yes</a>
                    <button class="red-button secondary half-width basic-text-font text-bold-600 red-text text-uppercase pull-left" data-dismiss="modal">No, Cancel</button>
                </div>
            </div>
        </div>
    </div>`);
        $.when( 
            $.ajax({ type: "POST", data:{ 'registry_url': regurl }, url: "https://www.weddingwishlist.com/weddingwebsite/index/getPostWeddingConfirmation", success : function(data) {
                return [data.enablePostwedding,data.enableRsvpmanager];
            }}),
            $.ajax({ type: "POST", data:{ 'registry_url': regurl }, url: "https://www.weddingwishlist.com/weddingwebsite/index/checkWebsitePrivacy", success : function(data) {
                if(data.result.toLowerCase() == 'success'){
                    return data.private;
                }else{
                    return 'error';
                }
            }}),
            ).then(function( content, pr_data) {
                rsvp_manager_enabled = content[0].enableRsvpmanager;
                if((pr_data[0].private) && (window.location.href.split("/").indexOf('weddingwebsite')==-1)){
                    validateSitePassword(content[0].enablePostwedding);
                }else{
                    loadContentData(content[0].enablePostwedding);
                }
         });
    })
    .on('click', '.navbar-nav .nav-item', function () {
        if ($('.navbar-toggler') && window.innerWidth < 768) {
            $('.navbar-toggler').trigger('click');
        }
    })
    .on('click','#update_rsvp_action',function(){
        jQuery('#update_rsvp_modal').modal('hide');
        var type = jQuery('#update_rsvp_modal').attr('data-id');
        if(type=='RSVP'){
            if(getRsvpPostData()!='error'){
                var postdata = getRsvpPostData();
                rsvpSubmit(postdata, "Thank you. We've received your RSVP"); 
            }
        }else if(type=='Guestbook'){
            if(getGuestbookPostData()!='error'){
                var postdata = getGuestbookPostData();
                rsvpSubmit(postdata, "Thank you signing the couple's guestbook");
            }
        }
    })
    .on('click', '.menu', function () {
        if (siteTheme == 'theme24') {
            $('.mobile-sidebar').toggleClass('open');
            $(this).toggleClass('active');
            if (!$(this).hasClass('active')) {
                $(this).addClass('back');
                setTimeout(function () { $(this).removeClass('back') }, 1000);
            }
        }
    })
    .on('click', '.mobile-sidebar .header-link', function () {
        if (siteTheme == 'theme24') { jQuery('.menu').trigger('click'); }
    })
    .on("click", '.fa-play-circle', function () {
        jQuery(this).addClass("fa-pause-circle").removeClass("fa-play-circle").attr("src", "images/sound-on.png");
        jQuery('body').find('#mymusic').get(0).play();
    })
    .on("click", '.fa-pause-circle', function () {
        jQuery(this).addClass("fa-play-circle").removeClass("fa-pause-circle").attr("src", "images/sound-off.png");
        jQuery('body').find('#mymusic').get(0).pause();
    })
    .on('click', '.view-map', function () {
        $('#save-map').text('Get Directions');
        $(".map-title,.hide-radius,.hide-coordinate,.saved-map").hide();
        $('#locationmodal .modal-title').text('Location in map');
        $('#locationmodal .map-text-box').attr('disabled', 'disabled');
        var mapid = $(this).attr('id'), lat = $(this).attr('lat'), lon = $(this).attr('lon'), loc = $(this).attr('address');
        $("#us3-address").val(loc);
        $("#save-map").attr("onclick", "window.open('https://www.google.com/maps?daddr=" + lat + "," + lon + "')");
        if (loc === "") { lat = 19.0760, lon = 72.8777; }
        $('#us3').locationpicker({
            location: { latitude: lat, longitude: lon },
            radius: 50, inputBinding: {
                latitudeInput: $('#us3-lat'), longitudeInput: $('#us3-lon'),
                radiusInput: $('#us3-radius'), locationNameInput: $('#us3-address')
            }, enableAutocomplete: true
        });
    })
    .on('click','.change-upload-attachment,.upload-attachment-icon',function(){
        var type = $(this).attr('data-attr');
        $('#'+type+'_upload').click();
    })
    .on('click','.remove-upload-attachment',function(){
        var type = $(this).attr('data-attr');
        $('#'+type+'_upload').val('');
        $('svg[data-attr="'+type+'"]').removeClass('active');
        $('p.attached-file-info[data-attr="'+type+'"]').addClass('d-none');
        $('p.attached-file-info[data-attr="'+type+'"]').html('');
    })
   .on('click','.attachment-icon',function(){
      var type = $(this).attr('data-attr');
      if($('#'+type+'_upload').val()==''){
        $('#'+type+'_upload').click();
      }else{
        jQuery('#alert-notification-modal .modal-header').html("");
        var message = `
        <p class="sub-title-font text-left pr-15 pl-15 file-upload-success-message" style="margin: 5px auto !important;">
            Change `+type+` upload 
        </p>
        <p class="basic-text-font text-left pr-15 pl-15 file-upload-success-message" style="margin: 15px auto !important;">
            Are you sure you want to change your uploaded `+type+`?
        </p>
        `;
        $('svg[data-attr="'+type+'"]').addClass('active');
        jQuery('#alert-notification-modal .modal-header').html(`<button type="button" class="close" data-dismiss="modal">×</button>`);
        jQuery('#alert-notification-modal .modal-body').children().html(message);
        jQuery('#alert-notification-modal .modal-footer').html(`
        <button class="btn btn-default pull-left half-size" data-dismiss="modal">Cancel</button>
        <button class="btn btn-danger half-size change-upload-attachment" data-attr="`+(type)+`">Browse</button>
        `);
        jQuery('#alert-notification-modal').modal('show');
      }
    })
    .on('change','.attachment-file-input',function(){
       var upload_type = $(this).attr('id').split('_');
       var file_path = $(this).val();
       var file_name = file_path.replace(/.*[\/\\]/, '');
       if(file_name.length>10){
           file_name = file_name.slice(0, 10)+'...';
       }
       var file_size = Math.round((this.files[0].size / 1024));
       var message = '';
       switch(upload_type[0]){
           case 'image':
            var allowedExtensions = 
            /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if (!allowedExtensions.exec(file_path)) {
                message = 'Please upload a photo of valid file type. Allowed formats (JPG,JPEG,PNG,GIF)';
            }
            if((file_size>5000) && (message.length==0)){
                message = 'Unable to upload image. Please make sure image is less than 5MB.';
            }
            break;
            case 'video':
            var allowedExtensions = 
                /(\.mp4|\.webm|\.ogg)$/i;
                if (!allowedExtensions.exec(file_path)) {
                    message = 'Please upload a video of valid file type. Allowed formats (MP4,WEBM,OGG)';
                }
                if((file_size>40000) && (message.length==0)){
                    message = 'Unable to upload video. Please make sure video is less than 40MB.';
                }
                break;
            case 'audio':
                var allowedExtensions = 
                /(\.mp3|\.wav|\.ogg|\.aac)$/i;
                if (!allowedExtensions.exec(file_path)) {
                    message = 'Please upload an audio of valid file type. Allowed formats (MP3,WAV,OGG,AAC)';
                }
                if((file_size>5000) && (message.length==0)){
                    message = 'Unable to upload audio. Please make sure audio is less than 5MB.';
                }
            break;
       }
       if((message.length>0) && message!=''){
            jQuery('#alert-notification-modal .modal-header').html(`<button type="button" class="close" data-dismiss="modal">×</button>`);
            jQuery('#alert-notification-modal .modal-body').children().html(message);
            jQuery('#alert-notification-modal .modal-body').children().attr('style','margin:15px 0 !important');
            jQuery('#alert-notification-modal .modal-footer').html(`
            <button class="btn btn-default pull-left half-size" data-dismiss="modal">Cancel</button>
            <button class="btn btn-danger half-size change-upload-attachment" data-attr="`+(upload_type[0])+`">Browse</button>
            `);
            jQuery('#alert-notification-modal').modal('show');
            $('svg[data-attr="'+upload_type[0]+'"]').removeClass('active');
            $('p.attached-file-info[data-attr="'+upload_type[0]+'"]').addClass('d-none');
            $('p.attached-file-info[data-attr="'+upload_type[0]+'"]').html('');
            $(this).val('');
            return false;
        }
        var preview = `Preview:`;
        if((upload_type[0]=='video' || upload_type[0]=='audio')){
            preview = `Play:`;
        }
        message = `<p class="sub-title-font text-left pr-15 pl-15 file-upload-success-message" style="margin: 5px auto !important;"><span style="text-transform:capitalize;">`+upload_type[0]+`</span> uploaded successfully.</p>
        <p class="basic-text-font file-upload-success-message" style="margin: 25px auto 10px !important;">`+preview+`</p>
        <div class="file-preview-block">`;
        if(upload_type[0]=='image'){
                message += `<img src="`+URL.createObjectURL(this.files[0])+`" alt="uploaded image" class="preview-upload" />`;
                $('p.attached-file-info[data-attr="image"]').html(`<span>`+file_name+`</span><span style="padding:0 10px;">(`+file_size+` K)</span><button type="button" class="close remove-upload-attachment" data-attr="image" style="
                ">×</button>`);
                $('p.attached-file-info[data-attr="image"]').removeClass('d-none');
        }else if(upload_type[0]=='video'){
                message +=`
                <video controls src="`+URL.createObjectURL(this.files[0])+`" alt="uploaded video" class="preview-upload" ></video>`;
                $('p.attached-file-info[data-attr="video"]').html(`<span>`+file_name+`</span><span style="padding:0 10px;">(`+file_size+` K)</span><button type="button" class="close remove-upload-attachment" data-attr="video" style="
                ">×</button>`);
                $('p.attached-file-info[data-attr="video"]').removeClass('d-none');
        }else if(upload_type[0]=='audio'){
                message +=`
                <audio controls src="`+URL.createObjectURL(this.files[0])+`" alt="uploaded audio" class="preview-upload" ></audio>`;
                $('p.attached-file-info[data-attr="audio"]').html(`<span>`+file_name+`</span><span style="padding:0 10px;">(`+file_size+` K)</span><button type="button" class="close remove-upload-attachment" data-attr="audio" style="
                ">×</button>`);
                $('p.attached-file-info[data-attr="audio"]').removeClass('d-none');
        }
        message+=`
        </div>`;
        $('svg[data-attr="'+upload_type[0]+'"]').addClass('active');
        jQuery('#alert-notification-modal .modal-header').html(`<button type="button" class="close" data-dismiss="modal">×</button>`);
        jQuery('#alert-notification-modal .modal-body').children().html(message);
        jQuery('#alert-notification-modal .modal-footer').html(`
        <button class="btn btn-default pull-left half-size change-upload-attachment" data-attr="`+(upload_type[0])+`">Choose, Another `+upload_type[0]+`</button>
        <button class="btn btn-danger half-size" data-dismiss="modal">ACCEPT</button>
        `);
        jQuery('#alert-notification-modal').modal('show');
    })
    .on('click','.view-live-stream',function(){
            var live_stream_div = jQuery(this);
            var stream_entity_id = live_stream_div.attr('data-id');
            jQuery.each(virtual_services_details,function(val){
                if(virtual_services_details[val].entity_id==stream_entity_id){
                    streamId = virtual_services_details[val].stream_id;
                    eventDetails = JSON.parse(virtual_services_details[val].event_details);
                    streamType = virtual_services_details[val].stream_type;
                    if((eventDetails[(eventDetails.length)-1]=='live_streaming') || (eventDetails[(eventDetails.length)-1]=='live_streaming_plus')){
                        if (streamId != '') {
                            switch(layout){
                                case '1':
                                    if(window.matchMedia("(max-width: 991px)").matches)
                                    {
                                        var divElem = live_stream_div.parents('.events-container').find('.event-img').parent();
                                        live_stream_div.parents('.events-container').find('.event-img img').hide();
                                    }else{
                                        var divElem = live_stream_div.parents('.events-container').find('.virtual-services-iframe');
                                        live_stream_div.parents('.events-container').find('.event-img').hide();
                                        live_stream_div.parents('.events-container').find('.event-description-wrapper').hide();
                                    }
                                    break;
                                case '2':
                                    var divElem = live_stream_div.parents('.function-details').find('.wed-image');
                                    live_stream_div.parents('.function-details').find('.wed-image img').hide();
                                    break;
                                case '4':
                                    var divElem = live_stream_div.parents('.each-section').find('.virtual-services-iframe');
                                    break; 
                                case '6':
                                case '5':
                                case '7':
                                    if(window.matchMedia("(max-width: 991px)").matches)
                                    {
                                        var divElem = live_stream_div.parents('.events-container').find('.event-img').parent();
                                        live_stream_div.parents('.events-container').find('.event-img img').hide();
                                    }else{
                                        var divElem = live_stream_div.parents('.events-container').find('.virtual-services-iframe');
                                        live_stream_div.parents('.events-container').find('.col-md-7').hide();
                                        live_stream_div.parents('.events-container').find('.col-md-5').hide();
                                    }
                                    break;
                            }
                            if (streamType == 'youtube') {
                                var iframElem = '<div class="youtube-iframe"><iframe id="yTube-iFrame-' + val + '" src="https://www.youtube.com/embed/' + streamId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
                                divElem.html(iframElem);
                                setTimeout(() => {
                                    var height = document.getElementById('yTube-iFrame-' + val).offsetWidth * 0.5625;
                                    document.getElementById('yTube-iFrame-' + val).height = height;
                                }, 1000);
                            } else {
                                var iframElem = customVirtualWeddingSection(virtual_services_details, val);
                                divElem.html(iframElem);
                            }
                        } else {
                            var currentTime = new Date();
                            var currentOffset = currentTime.getTimezoneOffset();
                            var istOffset = 330;
                            var istTime = new Date(currentTime.getTime() + (istOffset + currentOffset) * 60000).getTime();
                            if (istTime < 1613869200000) {
                                var content = '<div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="modal-content-outer"><div class="clearer"></div>';
                                content += '<div class="custom-ww-content">Please return to see the live streaming.</br></br></br></br></div>';
                                content += '<div class="custom-ww-cta"><a class="what-is-registry-anchor" id="custom-ww-close" data-dismiss="modal">OK</a></div></div></div></div>';
                                if (jQuery(document).find('#live-stream-msg').length < 1) {
                                    content = '<div id="live-stream-msg" class="client-req-custom-modal modal fade" role="dialog">' + content + '</div>';
                                    jQuery('body').append(content);
                                } else {
                                    jQuery(document).find('#live-stream-msg').html(content);
                                }
                                setTimeout(() => { jQuery(document).find('#live-stream-msg').modal('show'); }, 200);
                            } else {
                                var content = '<div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="modal-content-outer"><div class="clearer"></div>';
                                content += '<div class="custom-ww-content">Wedding livestream is yet to start. Please stand by.</br></br></div>';
                                content += '<div class="custom-ww-cta"><a class="what-is-registry-anchor" id="custom-ww-close" data-dismiss="modal">OK</a></div></div></div></div>';
                                if (jQuery(document).find('#live-stream-stand-by').length < 1) {
                                    content = '<div id="live-stream-stand-by" class="client-req-custom-modal modal fade" role="dialog">' + content + '</div>';
                                    jQuery('body').append(content);
                                } else {
                                    jQuery(document).find('#live-stream-stand-by').html(content);
                                }
                                setTimeout(() => { jQuery(document).find('#live-stream-stand-by').modal('show'); }, 200);
                            }
                        }
                    }
                }
            });
    })
    .on('click','.view-guest-party ',function(){
        var guest_party_div = jQuery(this);
        var stream_entity_id = guest_party_div.attr('data-id');
      /*   var streamUrl = '', streamType = details.guest_party.stream_type;
        if (streamType == 'zoom') {
            streamUrl = `https://zoom.us/j/${details.guest_party.stream_id}`;
            if (!isEmpty(details.guest_party.stream_pwd)) {
                streamUrl += `?pwd=${details.guest_party.stream_pwd}`;
            }
        } */
        jQuery.each(virtual_services_details,function(val){
            if(virtual_services_details[val].entity_id==stream_entity_id){
                streamId = virtual_services_details[val].stream_id;
                eventDetails = JSON.parse(virtual_services_details[val].event_details);
                var currentTime = new Date();
                var currentOffset = currentTime.getTimezoneOffset();
                var istOffset = 330;
                var istTime = new Date(currentTime.getTime() + (istOffset + currentOffset) * 60000).getTime();
                var start_time = eventDetails[0];
                var end_time = eventDetails[1];
                var countDownDateStart = new Date(""+start_time+"").getTime();
                var countDownDateEnd = new Date(""+end_time+"").getTime();
                console.log('Countdown Start Time'+countDownDateStart);
                console.log('Current IST Time'+istTime);
                console.log('Countdown End Time'+countDownDateEnd);
                if (istTime < countDownDateStart) {
                    var content = '<div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="modal-content-outer"><div class="clearer"></div>';
                    content += '<div class="custom-ww-content">Please return to join the guest party on </br></br>'+start_time+' IST</br></br></br></div>';
                    content += '<div class="custom-ww-cta"><a class="what-is-registry-anchor" id="custom-ww-close" data-dismiss="modal">OK</a></div></div></div></div>';
                    if (jQuery(document).find('#live-stream-msg').length < 1) {
                        content = '<div id="live-stream-msg" class="client-req-custom-modal modal fade" role="dialog">' + content + '</div>';
                        jQuery('body').append(content);
                    } else {
                        jQuery(document).find('#live-stream-msg').html(content);
                    }
                    setTimeout(() => { jQuery(document).find('#live-stream-msg').modal('show'); }, 200);
                }else if (istTime > countDownDateStart && istTime < countDownDateEnd){
                    var streamUrl = '', streamType = virtual_services_details[val].stream_type;
                    if (streamType == 'zoom') {
                        streamUrl = `https://zoom.us/j/${virtual_services_details[val].stream_id}`;
                        if (!isEmpty(virtual_services_details[val].stream_pwd)) {
                            streamUrl += `?pwd=${virtual_services_details[val].stream_pwd}`;
                        }
                    }
                    var link = document.createElement('a');
                    link.href = streamUrl+'';
                    link.target = '_blank';
                    document.body.appendChild(link);
                    link.click();
                }
            }
        });
         
    })
    .on("click", ".what-reg-popup", function () {
        if (jQuery('#what-reg-msg-info').length > 0) {
            jQuery('#what-reg-msg-info').modal('show');
        }
    })
    .on("click", ".bestseller-btn", function () {
        window.open('/wedding-gifts', '_blank');
    })
    .on('click', '.rsvp-options .rsvp-button', function () {
        $('.rsvp-options .rsvp-button').removeClass('active');
        $(this).addClass('active');
    })
    .on('keyup', '#rsvp-guests-count', function () {
        $(this).val($(this).val().replace(/[^0-9]/, ''));
    })
    .on('click', '#rsvp_submit', function () {
        if(getRsvpPostData()!='error'){
            var postdata = getRsvpPostData();
            checkRsvp(postdata,'RSVP');
        }
    })
    .on('click','#arrival_date,#departure_date',function(){
        jQuery(this).datetimepicker({defaultTime:'16:00'});
    })
    .on('click', '#guestbook_submit', function () {
        if(getGuestbookPostData()!='error'){
            var postdata = getGuestbookPostData();
            checkRsvp(postdata,'Guestbook');
        }
    })
    .on('click', '.invite-guests', function () {
        shareSite();
    })
    .on('click', '#attend_meeting', function () {
        var flag = true;
        $(".mandatory-field").hide();
        var name = $("#fname_meeting").val();
        var mail = $("#mail_meeting").val();
        var phone = $("#phone_meeting").val();
        if (isEmpty(name) || isEmpty(mail)) {
            if (isEmpty(name)) {
                $(".mandatory-field.fname_meeting").show();
            }
            if (isEmpty(mail)) {
                $(".mandatory-field.mail_meeting").show();
            }
            flag = false;
        }
        if (flag) {
            startZoomMeeting(name, mail);
        }
    })
    .on('change', 'input[name="stats_attend"]', function () {
        var value = jQuery('input[name="stats_attend"]:checked').val();
        if (value == 'attending') {
            jQuery('#guest_section').removeClass('d-none');
        } else {
            jQuery('#guest_section').addClass('d-none');
        }
    })
    .on('change', 'input[name="accomodate_status"]', function () {
        var value = jQuery('input[name="accomodate_status"]:checked').val();
        if (value == 'needed') {
            jQuery('.accomodation_additional').removeClass('d-none');
        } else {
            jQuery('.accomodation_additional').addClass('d-none');
        }
    })
    .on('change', 'input[name="allergic"]', function () {
           if(jQuery('input[name="allergic"][value="other"]:checked').length==1){
                jQuery('.allergic_additional').removeClass('d-none');
           }else{
                jQuery('.allergic_additional').addClass('d-none');
           }
    });

/* Common function calls and On-Click Events Ends */
function loadExtraElements () {
    jQuery.ajax({ type: "GET", url: customBaseURL+"/weddingwebsite/index/loadExtraElements",
        success : function(data) { 
            if(data.alert_modal){
                jQuery('body').append(data.alert_modal);
            }
            if(data.product_popup){
                jQuery('body').append(data.product_popup);
            }
            if (data.total_cart_items > 0) {
                if(siteTheme == 'theme24'){
                    jQuery('header .desktop-header').append('<li class="guest-cart-icon"><a href="'+customBaseURL+'/checkout/cart" target="_blank"><i class="fa" style="font-size:24px">&#xf07a;</i><span class="cart-count">'+data.total_cart_items+'</span></a></li>');
                    jQuery('header nav.header').append('<div id="guest-cart-icon-mobile" class="guest-cart-icon"><a href="'+customBaseURL+'/checkout/cart" target="_blank"><i class="fa" style="font-size:24px">&#xf07a;</i><span class="cart-count">'+data.total_cart_items+'</span></a></div>');
                } else {
                    jQuery('header .desktop-header').append('<li class="guest-cart-icon"><a href="'+customBaseURL+'/checkout/cart" target="_blank"><i class="fa" style="font-size:24px">&#xf07a;</i><span class="cart-count">'+data.total_cart_items+'</span></a></li>');
                    jQuery('header .navbar').append('<div id="guest-cart-icon-mobile" class="guest-cart-icon"><a href="'+customBaseURL+'/checkout/cart" target="_blank"><i class="fa" style="font-size:24px">&#xf07a;</i><span class="cart-count">'+data.total_cart_items+'</span></a></div>');
                }
            }
        }
    });
}

function checkGuestBookStatus () {
    jQuery.ajax({ type: "POST", data:{ 'regurl': regurl }, url: customBaseURL+"/weddingwebsite/index/wishlist",
        success : function(data) { var json = jQuery.parseJSON(data); wishlist_id = json.reg_id; document.cookie = "RegID="+wishlist_id+"; expires=Thu, 19 Dec 2030 12:00:00 UTC; path=/";
            if(json.show_gb){ $(".view-guestbook").show(); $(".view-guestbook").attr("href",json.gb_href); }
            else { $(".view-guestbook").hide(); }
        }
    });
}

function validateSitePassword (content) {
    var password = prompt("Please enter the password to continue", "");
    jQuery.ajax({ type: "POST", data:{ 'regurl': regurl, 'password': password }, url: customBaseURL+"/weddingwebsite/index/validateSitePassword",
        success: function (data) { if (data.result.toLowerCase() == 'success' && data.approved) { loadContentData(content); }
        else { alert('Invalid Password!'); validateSitePassword(content); } }
    });
}

/* Load Layout and Content Starts */
function loadLayoutDetails () {
    var data = { 'registry_url': regurl, 'site_theme': siteTheme }, url = customBaseURL+'/weddingwebsite/index/getLayoutDesign';
    $.ajax({
        type: 'POST', dataType: 'json', data: data, url: url,
        success: function (data) {
            if (data.result == 'success') {
                layout_data = data.layout;
                setLayoutData(layout_data);
            }
        }
    });
}
function getJsonData(){
    var content_data_url = customBaseURL+"/couple_ws/" + regurl + "/content.json?random=" + parseInt(Math.random() * 10000);
    $.getJSON(content_data_url, function (json) {
        content_data = json; 
        return content_data;
    }).fail(function () {
        $.getJSON(customBaseURL+`/weddingwebsite/${siteTheme}/assets/json/content.json`, function (json) { content_data = json; });
        return content_data;
    })
}
/* Load Layout and Content Ends */
function loadContentData (postWeddingPurchased) {
   
        if((rsvp_manager_enabled==0) && (window.location.href.split("/").indexOf('weddingwebsite')==-1)){
            if (content_data.visible_sections.indexOf('rsvp') > -1) {
                content_data.visible_sections.splice(content_data.visible_sections.indexOf('rsvp'),1);
            }
            if (content_data.visible_sections.indexOf('guest_book') > -1) {
                content_data.visible_sections.splice(content_data.visible_sections.indexOf('guest_book'),1);
            }
        }
        if((rsvp_manager_enabled==1) && (content_data.visible_sections.indexOf('rsvp')!=-1) && (content_data.visible_sections.indexOf('guest_book')==-1)){
            content_data.visible_sections.push('guest_book');
        }
        if((rsvp_manager_enabled==0) && (rsvp_manager_exceptions.includes(wishlist_id))){
            content_data.visible_sections.push('rsvp');
            content_data.visible_sections.push('guest_book');
        }
         if((rsvp_manager_enabled==1) && (rsvp_manager_exceptions.includes(wishlist_id))){
            delete rsvp_manager_exceptions[rsvp_manager_exceptions.indexOf(wishlist_id)];
        }
        setContentData(content_data);
        siteId = content_data.siteId;
        loadProductsMultiSelect();
        loadAudio();
  
        content_data.visible_sections =  visible_sections=["wedding_details"];
        setWebsiteExpiredContent(content_data);
        siteId = content_data.siteId;
        loadProductsMultiSelect();
        loadAudio(); 
   

}
/* Set Layout and Content Starts*/
function setLayoutData (data) { }
function setContentData (data) {
    var section, sectionType, title, content = '';
    $('.nav-couple-name, .couple-name, .footer-name, .baby-name').html(data.couple_name.toLowerCase());
    $('.wedding-date, .footer-date').html(data.wedding_date.toLowerCase());
    if($('.banner-image').length){
        $('.banner-image').attr("src", data.banner_image).css({ 'content': 'none' });
    } else if ($('#banner').length) {
        if(siteTheme=='theme32'){
            $('#banner').attr('src', data.banner_image);
        }else{
            $('#banner').css({ 'background-image': 'url("' + data.banner_image + '")' });
        }
    }
    if($('.wedding-venue').length){
        $('.wedding-venue').html(data.wedding_city.toLowerCase());
    }
    if (typeof (window.updateWeddingContentPosition) == 'function') { updateWeddingContentPosition(); }
    visible_sec = data.visible_sections;
    var sections = '#' + visible_sec.join(',#');
    var headerSections = '.' + visible_sec.join('_header,.') + '_header';
    $('.content-section:not(' + sections + ')').addClass('d-none');
    $('.header-link:not(' + headerSections + '), .nav-link:not(' + headerSections + ')').parents('li').addClass('d-none');
    for (index in data.sections) {
        content = '';
        section = data.sections[index];
        sectionType = section.type;
        title = (section && section.title) ? section.title : '';
        if (layoutFour.indexOf(siteTheme) > -1) {
            title = title.replace(/\s*/ig, '<br>');
            title = title.substr(4, (title.length - 8));
            title = title.replace(/<br>\s*<br>/g, '<div class="word-break-section"></div>')
        }
        $('#' + sectionType + ' .section-title').html(title);
        switch (sectionType) {
            case 'our_story':
                content = getBasicSectionContent(section, 'Our Story');
                break;
            case 'functions':
                content = getFunctionsContent(section);
                break;
            case 'travel':
                content = getBasicSectionContent(section, 'Travel');
                break;
            case 'rsvp':
                content = getRSVPContent(section);
                break;
            case 'guest_book':
                content = getGuestbookContent();
                break;
            case 'photo_gallery':
                if(content_data.visible_sections.indexOf('photo_gallery') > -1) {
                    getGalleryImages(regurl);
                }
                break;
        }
        if (sectionType != 'gift_registry' && sectionType != 'photo_gallery') {
            $('#' + sectionType + ' .content-list').html(content);
        }
    }
    if(!isEmpty(data.theme_color)){
        $('.body-background').addClass(data.theme_color);
    }
    doc_html_loaded = 1;
    updateSectionHeightStatus();
}
function setWebsiteExpiredContent (data) {
    var section, sectionType, title, content = '';
    $('.wedding-content').before('<section class="alert-section"><p class="alert-banner text-center"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></i>THE COUPLE YOU ARE LOOKING FOR, IS ALREADY MARRIED. THEIR WEBSITE IS NO LONGER AVAILABLE. FOR ANY QUESTIONS, <a href="/customer-service/contact-us#contact-us-form" target="_blank" class="basic-text-font teal-color hover text-uppercase">CONTACT US</a></p></section>');
    $('header').addClass('d-none');
    $('.nav-couple-name, .couple-name, .footer-name, .baby-name').html(data.couple_name.toLowerCase());
    $('.wedding-date, .footer-date').html(data.wedding_date.toLowerCase());
    if($('.banner-image').length){
        $('.banner-image').attr("src", data.banner_image).css({ 'content': 'none' });
    } else if ($('#banner').length) {
        $('#banner').css({ 'background-image': 'url("' + data.banner_image + '")' });
    }
    if(siteTheme == 'theme24'){
        $('.banner-section').css('top','35px');
        $('.footer-wedding-content').css('display','none');
    }
    $('#title').attr('style','padding-top:0px !important;');
    $('.banner-image').css('margin-bottom','0px');
    if($('.wedding-venue').length){
        $('.wedding-venue').html(data.wedding_city.toLowerCase());
    }
    visible_sec = data.visible_sections;
    var sections = '#' + visible_sec.join(',#');
    var headerSections = '.' + visible_sec.join('_header,.') + '_header';
    $('.content-section:not(' + sections + ')').addClass('d-none');
    $('.countdown-section').addClass('d-none');
    $('.header-link:not(' + headerSections + '), .nav-link:not(' + headerSections + ')').parents('li').addClass('d-none');
    doc_html_loaded = 1;
    updateSectionHeightStatus();
}
/* Set Layout and Content Ends*/

/* Virtual Weddings Section Starts */
function updateWeddingDateCounter (date, visibleSections) {
    var isHidden = false;
    weddingDateInterval = setInterval(function () {
        var days = 0, hours = 0, min = 0, sec = 0, remaining = date;
        if (date > 0) { /* before Wedding Day */
            if (jQuery.inArray("rsvp", visibleSections) > -1) {
                isHidden = jQuery("#rsvp").hasClass('d-none');
                jQuery("#rsvp").removeClass('d-none');
                jQuery(".rsvp.nav-item").removeClass('d-none');
                jQuery("#guest_book").addClass('d-none');
                jQuery(".guest_book.nav-item").addClass('d-none');
                if (isHidden) { updateSectionHeightStatus(); }
            } else if(jQuery.inArray("guest_book", visibleSections) > -1) {
                isHidden = jQuery("#guest_book").hasClass('d-none');
                jQuery("#rsvp").addClass('d-none');
                jQuery(".rsvp.nav-item").addClass('d-none');
                jQuery("#guest_book").removeClass('d-none');
                jQuery(".guest_book.nav-item").removeClass('d-none');
                if (isHidden) { updateSectionHeightStatus(); }
            }
            days = Math.floor(remaining / (day/second));
            remaining -= (days * (day / second));
            hours = Math.floor(remaining / (hour/second));
            remaining -= (hours * (hour / second));
            min = Math.floor(remaining / (minute/second));
            sec = remaining - (min * (minute / second));
        } else {
            if (jQuery.inArray("guest_book", visibleSections) > -1) {
                isHidden = jQuery("#guest_book").hasClass('d-none');
                jQuery("#rsvp").addClass('d-none');
                jQuery(".rsvp.nav-item").addClass('d-none');
                jQuery("#guest_book").removeClass('d-none');
                jQuery(".guest_book.nav-item").removeClass('d-none');
                if (isHidden) { updateSectionHeightStatus(); }
            }
            jQuery('.countdown-banner, .bottom-countdown').addClass('d-none');
            if (date > ((day / 1000) * -1)) { /* On wedding day */
                jQuery('.today-banner').removeClass('d-none');
            } else { /* After Wedding Day */
                /* Hide sections for Post Wedding Site starts */
                // $(".functions_header[href='#functions']").parent().addClass('d-none');
                // $("#functions").addClass('d-none');
                $(".travel_header[href='#travel']").parent().addClass('d-none');
                $("#travel").addClass('d-none');
                /* Hide sections for Post Wedding Site ends */
                jQuery('.thanks-banner').removeClass('d-none');
                updateThankyouNote();
                jQuery('.today-banner').addClass('d-none');
                updateSectionHeightStatus();
                clearInterval(weddingDateInterval);
            }
        }
        jQuery('.countdown-banner .days, .countdown-footer .days').html((days < 10) ? '0' + days.toString() : days);
        jQuery('.countdown-banner .hours, .countdown-footer .hours').html((hours < 10) ? '0' + hours.toString() : hours);
        jQuery('.countdown-banner .min, .countdown-footer .min').html((min < 10) ? '0' + min.toString() : min);
        jQuery('.countdown-banner .sec, .countdown-footer .sec').html((sec < 10) ? '0' + sec.toString() : sec);
        date--;
    }, second);
}
function getRsvpPostData(){
    var flag = true, name = $("#rsvp-name").val(), mail = $("#rsvp-email").val(), count = $("#guest_count").val(), phone = $("#rsvp-phone").val();
    var status = $('.rsvp-options input[name="stats_attend"]:checked').val(), rsvpmsg = $("#rsvp-message").val(),accomodation_details=acommodation=food_meal_preference=food_main_course=phone='',food_allergic = [];
    var arrival_details = [], departure_details = [];
    if($('.rsvp-options input[name="meal_preference"]:checked').val()){
        food_meal_preference =$('.rsvp-options input[name="meal_preference"]:checked').val().replace(/option_/ig,'');
    }
    if($('#rsvp-phone').val()){
        phone = $('#rsvp-phone').val();
    }
    if($('.rsvp-options input[name="main_course"]:checked').val()){
        food_main_course =  $('.rsvp-options input[name="main_course"]:checked').val().replace(/option_/ig,'');
    }
    if($('.rsvp-options input[name="accomodate_status"]:checked').val()){
        if($('.rsvp-options input[name="accomodate_status"]:checked').val()=='needed'){
            acommodation = 1;
        }else{
            acommodation = 0;
        }
    }
    if(acommodation==1){
        accomodation_details = $('#additional_details_accom').val();
    }
    $('.rsvp-options input[name="allergic"]:checked').each(function() { 
        food_allergic.push($(this).val().replace(/option_/ig,'')); 
    }); 
    if(food_allergic.includes("other")){
       food_allergic.push($('#other_details_allergic').val());
    }
    arrival_details[0] = $('#arrival_date').val();
    arrival_details[1] = $('#arrival_details').val();
    departure_details[0] = $('#departure_date').val();
    departure_details[1] = $('#departure_details').val();
    /* var msg = ($("#include_guestbook:checkbox:checked").length > 0) ? rsvpmsg : ''; */
    $('.error-red-text').addClass('d-none');
    if (isEmpty(name) || $("#rsvp-email").length || $("#rsvp-phone").length || $('.rsvp-options input[name="stats_attend"]').length) {
        if (isEmpty(name)) { flag = false; $('.name-error').removeClass('d-none'); $("#rsvp-name").focus(); }
        if($("#rsvp-email").length>0 && isEmpty(mail)){
            flag = false;
            $('.email-error').removeClass('d-none'); $("#rsvp-email").focus(); 
        }
        if($("#rsvp-phone").length>0 && isEmpty(phone)){
            flag = false;
            $('.phone-error').removeClass('d-none'); $("#rsvp-email").focus(); 
        }
        if ($('.rsvp-options input[name="stats_attend"]').length>0 && isEmpty(status)) {
            flag = false;
             $('.attendance-error').removeClass('d-none'); 
             $('.rsvp-options .rsvp-button').focus(); 
        }
    }
    if (flag) {
        var postdata = {
            'name': name, 'email': mail, 'status': status, 'count': count,'phone':phone,
            'rsvp_message': rsvpmsg, 'message': rsvpmsg,'arrival':arrival_details,'departure':departure_details,
            'accomodation':acommodation,
            'accomodation_details':accomodation_details,
            'food_meal_preference':food_meal_preference,
            'food_allergic':food_allergic,
            'food_main_course':food_main_course,
            'regurl': regurl
        };
    }
    if((postdata) && (postdata!='')){
        return postdata;
    }
    return 'error';
}
function getGuestbookPostData(){
    var flag = true, name = $("#gname").val(), mail = $("#gemail").val(), msg = $("#gmessage").val();
    $('.error-red-text').addClass('d-none');
    if (isEmpty(name) || isEmpty(mail)) {
        flag = false;
        if (isEmpty(mail)) { $('.gemail-error').removeClass('d-none'); $("#gemail").focus(); }
        if (isEmpty(name)) { $('.gname-error').removeClass('d-none'); $("#gname").focus(); }
    }
    if (flag) {
        var postdata = {
            'name': name, 'email': mail, 'message': msg, 'regurl': regurl
        };
    }
    if((postdata) && (postdata!='')){
        return postdata;
    }
    return 'error';
}
function updateLiveStreamSection (detail) {
    var endTime, startTime, eventName = 'wedding';
    startTime = detail.stream_start;
    endTime = detail.stream_end;
    liveStreamInterval = setInterval(function () {
        /* Live cerimony time specific conditions Starts */
        if (startTime > 0) { /* before cerimony */
            liveStreamState = 'before';
            if (guestPartyState == 'before' || guestPartyState == '') {
                jQuery('.join_virtually_nav').removeClass('d-none');
            }
            jQuery('#join-virtually-head-title-1, .join_virtually_header').parent().addClass('d-none');
        } else { /* cerimony started */
            jQuery('.join_virtually_nav').addClass('d-none');
            jQuery('#join-virtually-head-title-1, .join_virtually_header').parent().removeClass('d-none');
            jQuery('#join_virtually .before-wedding .live_stream').addClass('d-none');
            if (endTime > 0) { /* streaming cerimony */
                liveStreamState = 'live';
                jQuery(".today-banner .live_stream, #join_virtually .live-stream-title, .share-invite-link").removeClass("d-none");
                if(visible_sec.includes("gift_registry")){
                    jQuery('.active-actions-wrapper').removeClass('d-none');
                }
            } else { /*after cerimony */
                liveStreamState = 'after';
                switch (sitePathName) {
                    case 'baby-registry' : eventName = 'baby ceremony'; break;
                    default: eventName = (regurl == 'arun-annamayil' || regurl == 'sreenivas-anju') ? 'engagement' : 'wedding'; break;
                }
                jQuery('#join-virtually-head-title-1, .join_virtually_header').html('Watch Ceremony');
                jQuery('#join_virtually .live-stream-title').html('Missed the ' + ((regurl == 'arun-annamayil' || regurl == 'sreenivas-anju') ? 'engagement' : eventName) + '? Watch it now.');
                jQuery("#join_virtually .live-stream-title").removeClass("d-none");
                jQuery('.today-banner .live_stream').parent().addClass('d-none d-sm-block');
                jQuery('.today-banner .live_stream, .active-actions-wrapper, .share-invite-link').addClass('d-none');
                jQuery('#footer').css({ 'margin-top': '50px' });
                clearInterval(liveStreamInterval);
            }
        }
        setIframeHeight();
        if (typeof setPreWedIframeHeight === "function") { setPreWedIframeHeight(); }
        updateSectionHeightStatus();
        startTime--;
        endTime--;
    }, second);
}

function updateGuestPartySection (detail) {
    var endCountDown, countDown, endTime, startTime, now;
    startTime = detail.stream_start;
    endTime = detail.stream_end;
    guestPartyInterval = setInterval(function () {
        /* Live cerimony time specific conditions Starts */
        if (startTime > 0) { /* before cerimony */
            guestPartyState = 'before';
            if (liveStreamState == 'before' || liveStreamState == '') {
                jQuery('.join_virtually_nav').removeClass('d-none');
            }
            jQuery('#join-party-head-title-1, .join_party_header').parent().addClass('d-none');
        } else { /* cerimony started */
            jQuery('.join_virtually_nav').addClass('d-none');
            jQuery('#join-party-head-title-1, .join_party_header').parent().removeClass('d-none');
            jQuery('#join_virtually .before-wedding .guest_party').addClass('d-none');
            if (endTime > 0) { /* streaming cerimony */
                guestPartyState = 'live';
                jQuery(".today-banner .guest_party, #join_virtually .guest-party-video, .share-invite-link").removeClass("d-none");
                if(visible_sec.includes("gift_registry")){
                    jQuery('.active-actions-wrapper').removeClass('d-none');
                }
            } else { /*after cerimony */
                guestPartyState = 'after';
                jQuery('#join-party-head-title-1, .join_party_header').parent().addClass('d-none');
                jQuery('.today-banner .guest_party').parent().addClass('d-none d-sm-block');
                jQuery(".today-banner .guest_party, #join_virtually .guest-party-video, .active-actions-wrapper, .share-invite-link").addClass("d-none");
                jQuery('#footer').css({ 'margin-top': '50px' });
                clearInterval(guestPartyInterval);
            }
        }
        updateSectionHeightStatus();
        startTime--;
        endTime--;
    }, second);
}

function setIframeHeight () {
    var height = document.getElementById('yTube-iFrame').offsetWidth * 0.5625;
    document.getElementById('yTube-iFrame').height = height;
}

function shareSite() {
    if (navigator.share) {
        navigator.share({
            title: 'Wedding Wishlist Registry',
            text: document.title,
            url: location.origin + location.pathname,
        }).then(function () { console.log('Successful share') })
            .catch(function (error) { console.log('Error sharing', error) });
    } else {
        copySiteUrl();
    }
}
function copySiteUrl() {
    if (jQuery(document).find('#copylocation').length == 0) {
        var elem = document.createElement('input');
        elem.type = 'text';
        elem.id = 'copylocation'
        elem.value = location.origin + location.pathname;
        elem.style.position = 'absolute';
        elem.style.bottom = 0;
        elem.style.left = 0;
        elem.style.transform = 'translateX(-100%)';
        document.body.append(elem);
    }
    var copyText = document.getElementById("copylocation");
    copyText.select();
    document.execCommand("Copy");
    if (jQuery(document).find('#share-link').length == 0) {
        var popup = '<div id="share-link" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content">' +
            '<div class="modal-body"><p class="section-content">The couple website link has been copied to clipboard. You can now paste it and invite guests!</p>' +
            '<div class="close-share-link"><a href="javascript:void(0);" data-dismiss="modal">OK</a></div>' +
            '</div></div></div></div>';
        jQuery('body').append(popup);
    }
    setTimeout(function () { jQuery('#share-link').modal('show'); }, 500);
}
/* Virtual Weddings Section Ends */

/* RSVP Submit Starts */
function checkRsvp(postdata,type){
    showOverlay('Adding...');
    jQuery.ajax({
        type: "POST", data: postdata, url: customBaseURL+"/weddingwebsite/index/checkRsvp",
        success: function (data) {
            var json = jQuery.parseJSON(data);
            if (json.result == 'existing_rsvp') {
                if(type=='RSVP'){
                    jQuery('#update_rsvp_modal').attr('data-id',type);
                    jQuery('#update_rsvp_modal').find('#header-title').html('Update RSVP');
                    jQuery('#update_rsvp_modal').find('#update-msg').html('Update your previous RSVP?');
                    jQuery('#update_rsvp_modal').modal('show');
                }else if(type=='Guestbook'){
                    jQuery('#update_rsvp_modal').attr('data-id',type);
                    jQuery('#update_rsvp_modal').find('#header-title').html('Update Guestbook');
                    jQuery('#update_rsvp_modal').find('#update-msg').html('Update your previous Guestbook?');
                    jQuery('#update_rsvp_modal').modal('show');
                }
                hideOverlay();
            } else if(json.result == 'new_rsvp') {
                if(type=='RSVP'){
                    if(getRsvpPostData()!='error'){
                        var postdata = getRsvpPostData();
                        rsvpSubmit(postdata, "Thank you. We've received your RSVP"); 
                    }
                }else if(type=='Guestbook'){
                    if(getGuestbookPostData()!='error'){
                        var postdata = getGuestbookPostData();
                        rsvpSubmit(postdata, "Thank you signing the couple's guestbook");
                    }
                }
            }
        }, error: function () {
            hideOverlay(); alert("Unable to save the details. Please try again after sometime");
        }
    });
}
function rsvpSubmit(postdata, successMessage) {
    showOverlay('Adding...');
    var attached_image = '', attached_video = '', attached_audio = '';
    var mail = $("#rsvp-email").val();
    var phone = $("#rsvp-phone").val();
   /*  var attachments_form_data = new FormData();
    if($('#image_upload').prop('files')[0]){
        attached_image = $('#image_upload').prop('files')[0];
        attachments_form_data.append('image',attached_image);
    }
    if($('#video_upload').prop('files')[0]){
        attached_video = $('#video_upload').prop('files')[0];
        attachments_form_data.append('video',attached_video);
    }  
    if($('#audio_upload').prop('files')[0]){
        attached_audio = $('#audio_upload').prop('files')[0];
        attachments_form_data.append('audio',attached_audio);
    }
    if(siteId){
        attachments_form_data.append('site_id',siteId);
    }
    if(regurl){
        attachments_form_data.append('regurl',regurl);
    }
    if(mail){
        attachments_form_data.append('email',mail);
    }
    if(phone){
        attachments_form_data.append('phone',phone);
    } */
    jQuery.ajax({
        type: "POST", data: postdata, url: customBaseURL+"/weddingwebsite/index/rsvp",
        success: function (data) {
            var json = jQuery.parseJSON(data);
            if (json.result == 'success') {
                document.cookie = "guest_view_" + wishlist_id + "=" + wishlist_id + "expires=Sat, 31 Dec 2050 12:00:00 UTC; path=/; samesite=none; secure;";
                $('#alert-notification-modal .modal-header').html("");
                $('#alert-notification-modal .modal-body').children().html(successMessage);
                $('#alert-notification-modal .modal-footer').html(`<button type="button" class="btn btn-primary float-left quantity_check_btn basic-text-font white-text red-button text-bold-600 text-uppercase" style="margin-bottom:20px !important;" data-dismiss="modal">Ok</button>`);
                $('#alert-notification-modal').modal('show');
                $('.rsvp-wrapper').find("input[type=text],input[type=email], textarea").val("");
/*              $('.remove-upload-attachment[data-attr="image"],.remove-upload-attachment[data-attr="video"],.remove-upload-attachment[data-attr="audio"]').click();
 */             $('.rsvp-options .rsvp-button').prop('checked', false);
                $('.rsvp-options .rsvp-button').removeClass('active');
                hideOverlay();
            /*     jQuery.ajax({
                    type: "POST", data: attachments_form_data,enctype: 'multipart/form-data',url: customBaseURL+"/weddingwebsite/index/uploadRsvpAttachments", processData: false,
                    contentType: false,
                    success: function (data) {
                      
                    }, error: function () {
                        hideOverlay(); alert("Unable to save the details. Please try again after sometime");
                    }
                }); */
            } else {
                alert("Unable to save the details. Please try again after sometime");
            }
        }, error: function () {
            hideOverlay(); alert("Unable to save the details. Please try again after sometime");
        }
    });
  
}
/* RSVP Submit Ends */

/* Add Virtual Wedding Section Starts */
function getVirtualWeddingContent (details) {
    var hasLiveStream = (details.live_stream) ? true : false;
    var hasGuestParty = (details.guest_party) ? true : false;
    var content = '<div class="section-content"><div class="text-center before-wedding">';
    if (hasLiveStream) {
        content += '<p class="live_stream">For guests unable to attend our ';
        switch (sitePathName) {
            case 'baby-registry' : content += 'baby ceremony'; break;
            default: content += (regurl == 'arun-annamayil' || regurl == 'sreenivas-anju') ? 'engagement' : 'wedding'; break;
        }
        content += ' in person, we hope you\'ll participate online!</p><p class="live_stream">To join the festivities, return to this website on ';
        if (regurl == 'arun-annamayil' || regurl == 'sreenivas-anju') { content += 'our engagement day.</p>'; } else {
            content += ((otherOccasionPath.indexOf(sitePathName) > -1) ? content_data.wedding_date : 'our wedding day') + '.</p>';
        }
    }
    content += '</div><div class="text-center live-stream-video ">';
    if (hasLiveStream) {
        content += '<p class="live-stream-title d-none">Watch our live wedding ceremony!</p>';
        if (details.live_stream.stream_type == 'youtube') {
            content += '<div class="youtube-iframe"><iframe id="yTube-iFrame" src="' + details.live_stream.stream_id + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else {
            content += customVirtualWeddingSection(details, 'live_stream');
        }
        content += '</div>';
    }
    content += '</div></div><div class="section-content"><div class="text-center before-wedding">';
    if (hasGuestParty) {
        content += '<div class="guest_party section-title heading-secondary-style">Guest Party</div>';
        content += '<p class="guest_party">We\'ll be hosting a guest party where you can celebrate and socialise with other remote guests.</p><p class="guest_party">To join the party, please return to this website on ';
        if (regurl == 'arun-annamayil') { content += 'our engagement day.</p>'; } else {
            content += ((otherOccasionPath.indexOf(sitePathName) > -1) ? content_data.wedding_date : 'our wedding day') + '.</p>';
        }
    }
    content += '</div><div class="text-center guest-party-video d-none">';
    if (hasGuestParty) {
        content += '<div class="section-title heading-secondary-style" id="join_party">Guest Party</div>';
        var streamUrl = '', streamType = details.guest_party.stream_type;
        if (streamType == 'zoom') {
            streamUrl = `https://zoom.us/j/${details.guest_party.stream_id}`;
            if (!isEmpty(details.guest_party.stream_pwd)) {
                streamUrl += `?pwd=${details.guest_party.stream_pwd}`;
            }
        }
        content += '<div class="guest-party-wrapper"><p></p>We are hosting an online party so our guests can celebrate and socialise with other guests they know. Once you JOIN the party, you will be placed in an online room with people familiar to you.';
        if (streamType == 'zoom') {
            content += '<div class="section-content text-center"><a class="action-link" href="' + streamUrl + '" target="_blank">JOIN PARTY</a></div>';
        } else {
            content += customVirtualWeddingSection(details, 'guest_party');
        }
        content += 'If using mobile, you might have to download an app, which should take less than 5 minutes.</div>';
    }
    content += '</div><div class="share-invite-link text-center d-none">'+
        '<svg width="23" height="24" viewBox="0 0 23 24"  class="share-icon" xmlns="http://www.w3.org/2000/svg">'+
        '<mask id="path-1-inside-1" fill="white">'+
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M23 3.5C23 5.433 21.433 7 19.5 7C18.2614 7 17.173 6.35658 16.5509 5.38574L6.76289 11.2311C6.91599 11.6245 7 12.0524 7 12.5C7 12.8161 6.95811 13.1223 6.87958 13.4136L16.3145 19.048C16.8661 17.8397 18.085 17 19.5 17C21.433 17 23 18.567 23 20.5C23 22.433 21.433 24 19.5 24C17.567 24 16 22.433 16 20.5C16 20.345 16.0101 20.1923 16.0296 20.0426L6.4786 14.3388C5.86181 15.3358 4.75847 16 3.5 16C1.567 16 0 14.433 0 12.5C0 10.567 1.567 9 3.5 9C4.62727 9 5.63007 9.53292 6.2702 10.3606L16.1358 4.46888C16.0474 4.1612 16 3.83613 16 3.5C16 1.567 17.567 0 19.5 0C21.433 0 23 1.567 23 3.5Z"/>'+
        '</mask>'+
        '<path d="M16.5509 5.38574L17.3929 4.84623L16.8701 4.03036L16.0382 4.52718L16.5509 5.38574ZM6.76289 11.2311L6.25016 10.3725L5.52438 10.806L5.83097 11.5938L6.76289 11.2311ZM6.87958 13.4136L5.91406 13.1532L5.71699 13.884L6.36685 14.2721L6.87958 13.4136ZM16.3145 19.048L15.8017 19.9066L16.7604 20.4791L17.2241 19.4633L16.3145 19.048ZM16.0296 20.0426L17.0212 20.172L17.1062 19.5208L16.5423 19.1841L16.0296 20.0426ZM6.4786 14.3388L6.99132 13.4803L6.14612 12.9755L5.62819 13.8127L6.4786 14.3388ZM6.2702 10.3606L5.47918 10.9724L6.02166 11.6737L6.78292 11.2191L6.2702 10.3606ZM16.1358 4.46888L16.6486 5.32743L17.3097 4.93263L17.0969 4.19259L16.1358 4.46888ZM19.5 8C21.9853 8 24 5.98528 24 3.5H22C22 4.88071 20.8807 6 19.5 6V8ZM15.7089 5.92525C16.5071 7.1709 17.9064 8 19.5 8V6C18.6163 6 17.8389 5.54226 17.3929 4.84623L15.7089 5.92525ZM7.27561 12.0896L17.0637 6.24429L16.0382 4.52718L6.25016 10.3725L7.27561 12.0896ZM8 12.5C8 11.9264 7.89218 11.3756 7.6948 10.8684L5.83097 11.5938C5.9398 11.8734 6 12.1785 6 12.5H8ZM7.84509 13.6739C7.9463 13.2986 8 12.9048 8 12.5H6C6 12.7273 5.96991 12.9461 5.91406 13.1532L7.84509 13.6739ZM16.8272 18.1894L7.3923 12.555L6.36685 14.2721L15.8017 19.9066L16.8272 18.1894ZM17.2241 19.4633C17.6192 18.598 18.4908 18 19.5 18V16C17.6792 16 16.113 17.0814 15.4048 18.6327L17.2241 19.4633ZM19.5 18C20.8807 18 22 19.1193 22 20.5H24C24 18.0147 21.9853 16 19.5 16V18ZM22 20.5C22 21.8807 20.8807 23 19.5 23V25C21.9853 25 24 22.9853 24 20.5H22ZM19.5 23C18.1193 23 17 21.8807 17 20.5H15C15 22.9853 17.0147 25 19.5 25V23ZM17 20.5C17 20.3884 17.0073 20.2789 17.0212 20.172L15.038 19.9132C15.0129 20.1057 15 20.3016 15 20.5H17ZM5.96588 15.1974L15.5169 20.9012L16.5423 19.1841L6.99132 13.4803L5.96588 15.1974ZM3.5 17C5.11917 17 6.53761 16.1442 7.32901 14.865L5.62819 13.8127C5.18602 14.5274 4.39778 15 3.5 15V17ZM-1 12.5C-1 14.9853 1.01472 17 3.5 17V15C2.11929 15 1 13.8807 1 12.5H-1ZM3.5 8C1.01472 8 -1 10.0147 -1 12.5H1C1 11.1193 2.11929 10 3.5 10V8ZM7.06121 9.74876C6.23986 8.68682 4.9499 8 3.5 8V10C4.30463 10 5.02027 10.379 5.47918 10.9724L7.06121 9.74876ZM15.6231 3.61032L5.75747 9.50201L6.78292 11.2191L16.6486 5.32743L15.6231 3.61032ZM15 3.5C15 3.93053 15.0607 4.34856 15.1748 4.74516L17.0969 4.19259C17.034 3.97383 17 3.74173 17 3.5H15ZM19.5 -1C17.0147 -1 15 1.01472 15 3.5H17C17 2.11929 18.1193 1 19.5 1V-1ZM24 3.5C24 1.01472 21.9853 -1 19.5 -1V1C20.8807 1 22 2.11929 22 3.5H24Z" fill="#757575" mask="url(#path-1-inside-1)"/>'+
        '</svg>'+
        '<a class="action-link invite-guests">Invite other guests</a> by sharing the website url'+
        '</div>';
    content += '</div></div>';
    if (layoutFour.indexOf(siteTheme) > -1) { content = '<div class="section-content-wrapper">' + content + '</div>'; }
    $('#join_virtually .content-list').html(content);
}
/* Add Virtual Wedding Section Ends */

/* Add RSVP Section Starts */
function getRSVPContent(section) {
    var rsvpQuestion = (regurl == 'dhirendra-priya') ? 'Please confirm your presence as soon as possible no later than 1st October. Actually after lockdown because the high demand most of the hotels, cab agencies, other event necessities etc are almost booked & we need to make all arrangements beforehand. We shall try our best to ensure that you have a good time. While we understand the risk of COVID19 situation we also made arrangement for attending the wedding virtually on 1-12-2020.<br>Are you attending?' : (regurl == 'sreenivas-anju') ? 'Please let us know whether you can attend our engagement' : 'Please let us know whether you can attend our wedding';
    var attendVirtually = (regurl != 'ram-chandrika') ? '<label class="rsvp-radio"><input class="rsvp-button" type="radio" name="stats_attend" value="virtual"><span class="radio-state"></span> I\'ll attend virtually</label>':'';
    var rsvp_manager =  (Object.keys(section).length>2)?(true):false;
    if(rsvp_manager && (!rsvp_manager_exceptions.includes(wishlist_id))){
        var content = '<div class="section-content rsvp-wrapper text-left">';
        if(section.guest_details.show=='yes'){
            if(section.guest_details.visible_options.length==3){
                content +=  
                '<div class="row"><div class="col-sm-12 name-email-margin">'+
                    '<input type="text" id="rsvp-name" placeholder="Your Name" class="rsvp-input"/>'+
                    '<span class="error-red-text name-error d-none">This field is mandatory.</span>'+
                '</div></div>';
                content +=  
                '<div class="row"><div class="col-sm-6 name-email-margin">'+
                    '<input type="text" id="rsvp-email" placeholder="Email" class="rsvp-input"/>'+
                    '<span class="error-red-text email-error d-none">This field is mandatory.</span>'+
                '</div><div class="col-sm-6 name-email-margin">'+
                    '<input type="text" id="rsvp-phone" placeholder="Phone" class="rsvp-input"/>'+
                    '<span class="error-red-text phone-error d-none">This field is mandatory.</span>'+
                '</div></div>';
    
            }else{
                content+='<div class="row">';
                jQuery.each(section.guest_details.visible_options,function(key,val){
                    if(val=='Name'){
                        content +=  '<div class="col-sm-6 name-email-margin">'+
                                        '<input type="text" id="rsvp-name" placeholder="Your Name" class="rsvp-input"/>'+
                                        '<span class="error-red-text name-error d-none">This field is mandatory.</span>'+
                                    '</div>';
                    }else{
                        content+='<div class="col-sm-6 name-email-margin">'+
                            '<input type="text" id="rsvp-'+val.toLowerCase()+'" placeholder="'+val+'" class="rsvp-input"/>'+
                            '<span class="error-red-text '+val.toLowerCase()+'-error d-none">This field is mandatory.</span>'+
                        '</div>'; 
                    }
                });
                content+='</div>';
            }
          
           
        }
        if(section.guest_message.show=='yes'){
            var attachment_icons='';
            if(section.guest_message.visible_options.includes('photo')){
                attachment_icons += `
                <?xml version="1.0" encoding="UTF-8"?>
                <svg class="attachment-icon" enable-background="new 0 0 480 480" data-attr="image" version="1.1" viewBox="0 0 480 480" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                    <path d="m440 72h-400c-22.08 0.026-39.974 17.92-40 40v256c0.026 22.08 17.92 39.974 40 40h400c2.245 9e-3 4.486-0.187 6.696-0.584 19.249-3.222 33.341-19.899 33.304-39.416v-256c-0.026-22.081-17.92-39.974-40-40zm-400 320c-12.435-2e-3 -22.81-9.501-23.904-21.888l159.5-104.29 162.21 126.18h-297.81zm424-24c0.013 11.742-8.492 21.761-20.08 23.656-1.294 0.233-2.606 0.348-3.92 0.344h-76.136l-105.99-82.488 94.784-75.792 111.34 66.808v67.472zm0-86.128-107.88-64.728c-2.868-1.725-6.506-1.482-9.12 0.608l-102.14 81.68-63.96-49.744c-2.695-2.094-6.421-2.249-9.28-0.384l-155.62 101.75v-239.06c0-13.255 10.745-24 24-24h400c13.255 0 24 10.745 24 24v169.87z"/>
                    <path d="m240 120c-26.51 0-48 21.49-48 48 0.026 26.499 21.501 47.974 48 48 26.51 0 48-21.49 48-48s-21.49-48-48-48zm0 80c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z"/>
                </svg>
                <input type="file" id="image_upload" accept="image/*" class="attachment-file-input">
                `;
            }
            if(section.guest_message.visible_options.includes('video')){
                attachment_icons+=`<svg class="attachment-icon"  data-attr="video" height="472pt" viewBox="0 -87 472 472" width="472pt" xmlns="http://www.w3.org/2000/svg"><path d="m467.101562 26.527344c-3.039062-1.800782-6.796874-1.871094-9.898437-.179688l-108.296875 59.132813v-35.480469c-.03125-27.601562-22.398438-49.96875-50-50h-248.90625c-27.601562.03125-49.96875 22.398438-50 50v197.421875c.03125 27.601563 22.398438 49.96875 50 50h248.90625c27.601562-.03125 49.96875-22.398437 50-50v-34.835937l108.300781 59.132812c3.097657 1.691406 6.859375 1.625 9.894531-.175781 3.039063-1.804688 4.898438-5.074219 4.898438-8.601563v-227.816406c0-3.53125-1.863281-6.796875-4.898438-8.597656zm-138.203124 220.898437c-.015626 16.5625-13.4375 29.980469-30 30h-248.898438c-16.5625-.019531-29.980469-13.4375-30-30v-197.425781c.019531-16.558594 13.4375-29.980469 30-30h248.90625c16.558594.019531 29.980469 13.441406 30 30zm123.101562-1.335937-103.09375-56.289063v-81.535156l103.09375-56.285156zm0 0"/></svg><input type="file" id="video_upload" accept="video/*" class="attachment-file-input">`;
            } if(section.guest_message.visible_options.includes('audio')){
                attachment_icons+=`<svg class="attachment-icon" data-attr="audio" height="511pt" viewBox="-90 1 511 511.99899"  width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m332.464844 275.082031c0-8.429687-6.835938-15.265625-15.269532-15.265625-8.433593 0-15.269531 6.835938-15.269531 15.265625 0 74.6875-60.757812 135.445313-135.445312 135.445313-74.683594 0-135.441407-60.757813-135.441407-135.445313 0-8.429687-6.835937-15.265625-15.269531-15.265625-8.433593 0-15.269531 6.835938-15.269531 15.265625 0 86.378907 66.320312 157.539063 150.710938 165.273438v41.105469h-56.664063c-8.433594 0-15.269531 6.835937-15.269531 15.269531 0 8.433593 6.835937 15.269531 15.269531 15.269531h143.871094c8.429687 0 15.265625-6.835938 15.265625-15.269531 0-8.433594-6.835938-15.269531-15.265625-15.269531h-56.667969v-41.105469c84.394531-7.730469 150.714844-78.894531 150.714844-165.273438zm0 0"/><path d="m166.480469 372.851562c53.910156 0 97.769531-43.859374 97.769531-97.769531v-177.316406c0-53.90625-43.859375-97.765625-97.769531-97.765625-53.90625 0-97.765625 43.859375-97.765625 97.765625v177.316406c0 53.910157 43.859375 97.769531 97.765625 97.769531zm-67.230469-275.085937c0-37.070313 30.160156-67.226563 67.230469-67.226563 37.070312 0 67.230469 30.15625 67.230469 67.226563v177.316406c0 37.070313-30.160157 67.230469-67.230469 67.230469-37.070313 0-67.230469-30.160156-67.230469-67.230469zm0 0"/></svg><input type="file" id="audio_upload" accept="audio/*" class="attachment-file-input">`;
            }
             content += '<div class="row">'+
            '<div class="col-sm-12">'+
                '<div class="rsvp-text-area-block">'+
                    '<textarea placeholder="Message for couple (optional)" id="rsvp-message" class="rsvp-text-area" rows="3"></textarea>'+
                    '<div class="file_list"><p class="basic-text-font attached-file-info d-none" data-attr="image"></p><p class="basic-text-font attached-file-info d-none" data-attr="video"></p><p class="basic-text-font attached-file-info d-none" data-attr="audio"></p></div>'+
                    '<div class="attachment-icons d-none">'+attachment_icons+
                '</div></div>'+
            '</div>'+
            '</div>';
        }
        if(section.attending_status.show=='yes'){
            content += '<div class="rsvp-question">'+rsvpQuestion+'</div>'+
                            '<div class="row rsvp-options">'+
                                '<span class="error-red-text attendance-error d-none">This field is mandatory.</span>'+
                                '<div class="rsvp-each-option m-0">';
            jQuery.each(section.attending_status.visible_options,function(key,val){
                content += '<label class="rsvp-radio"><input class="rsvp-button" type="radio" name="stats_attend" value="'+val+'"><span class="radio-state"></span>'+section.attending_status.options[val]+'</label>';
            });
            content += '</div>'+
            '</div>';
        }
        content += '<div class="rsvp-form d-none" id="guest_section">';
        if(section.no_of_guests=='yes'){
            content += 
            '<div class="row">'+
                '<div class="col-sm-12">'+
                    '<input type="text" id="guest_count" placeholder="No. of guests attending" class="rsvp-input"/>'+
                '</div>'+
            '</div>';
        }
     /*    if(section.arrival_departure_details=='yes'){
            content +=    
            '<div class="row">'+
                '<div class="col-sm-6">'+
                    '<input type="text" placeholder="Arrival Date and Time" id="arrivaltimepicker" class="rsvp-input mt-20"/>'+
                '</div>'+
                '<div class="col-sm-6">'+
                    '<input type="text" placeholder="Arrival Details" id="arrival_details" class="rsvp-input mt-20"/>'+
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-sm-6">'+
                    '<input type="text" placeholder="Departure Date and Time" id="departuretimepicker" class="rsvp-input mt-20"/>'+
                '</div>'+
                '<div class="col-sm-6">'+
                    '<input type="text" placeholder="Departure Details" id="departure_details" class="rsvp-input mt-20"/>'+
                '</div>'+
            '</div>';
        } */
        if(section.arrival_departure_details.show=='yes'){
            switch(Object.keys(section.arrival_departure_details.visible_options).length){
                case 2:
                    content +=`<div class="row" >`;
                    content += '<div class="col-sm-6">'+
                                    '<input type="text" placeholder="Arrival Date & Time" id="arrival_date" class="rsvp-input mt-20"/>'+
                                '</div>';
                    content += '<div class="col-sm-6">'+
                                    '<input type="text" placeholder="Departure Date & Time" id="departure_date" class="rsvp-input mt-20"/>'+
                                '</div>';
                    content +=`</div>`;
                break;
                case 3:
                    if(section.arrival_departure_details.visible_options.includes('arrival_details')){
                        content +=`<div class="row" >
                                        <div class="col-sm-6">
                                            <input type="text" placeholder="Arrival Date & Time" id="arrival_date" class="rsvp-input mt-20"/>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" placeholder="Arrival Details (Optional)" id="arrival_details" class="rsvp-input mt-20"/>
                                        </div>
                                    </div>`;
                        content +=`<div class="row" >
                                        <div class="col-sm-12">
                                            <input type="text" placeholder="Departure Date & Time" id="departure_date" class="rsvp-input mt-20"/>
                                        </div>
                                    </div>`;
                    }else{
                        content +=`<div class="row" >
                                        <div class="col-sm-12">
                                            <input type="text" placeholder="Arrival Date & Time" id="arrival_date" class="rsvp-input mt-20"/>
                                        </div>
                                    </div>`;
                        content +=`<div class="row">
                                        <div class="col-sm-6">
                                            <input type="text" placeholder="Departure Date & Time" id="departure_date" class="rsvp-input mt-20"/>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" placeholder="Departure Details (Optional)" id="departure_details" class="rsvp-input mt-20"/>
                                        </div>
                                    </div>`;
                    }
                    break;
                case 4:
                    section.arrival_departure_details.visible_options = ['arrival_date','arrival_details','departure_date','departure_details'];
                    jQuery.each(section.arrival_departure_details.visible_options,function(key,val){
                        if(key%2==0){
                            content +=`<div class="row" >`;
                        }
                        content += '<div class="col-sm-6">'+
                                        '<input type="text" placeholder="'+stringToCapitalize(val.replace(/_/ig," "))+'" id="'+val+'" class="rsvp-input mt-20"/>'+
                                    '</div>';
                        if(key%2==1){
                            content +=`</div>`;
                        }
                    });
                break;

            }
        }
        if(section.accomodation_details.show=='yes'){
            content += '<div class="row rsvp-options mt-20">'+
                                '<div class="rsvp-each-option m-0"><div class="rsvp-question" style="margin-top: .7rem;margin-left: .7rem;width:100%;text-align:left;">Accomodation</div>';
            jQuery.each(section.accomodation_details.visible_options,function(key,val){
                if(key==1){
                    content += '<label class="rsvp-radio"><input class="rsvp-button" type="radio" name="accomodate_status" checked value="'+val+'"><span class="radio-state"></span>'+section.accomodation_details.options[val]+'</label>';
                }else{
                    content += '<label class="rsvp-radio"><input class="rsvp-button" type="radio" name="accomodate_status" value="'+val+'"><span class="radio-state"></span>'+section.accomodation_details.options[val]+'</label>';
                }
            });
            content += '</div>'+
            '</div>'; 
            content += 
            '<div class="row accomodation_additional d-none">'+
                '<div class="col-sm-12">'+
                    '<input type="text" id="additional_details_accom" placeholder="Additional Details (Optional)" class="rsvp-input" style="margin-bottom: 20px;" />'+
                '</div>'+
            '</div>';
        }
        if(section.meal_preference.show=='yes'){
            content += '<div class="row rsvp-options">'+
                                '<div class="rsvp-each-option m-0"><div class="rsvp-question" style="margin-top: .7rem;margin-left:.7em;width:100%;text-align:left;">Food Selection</div>';
            jQuery.each(section.meal_preference.visible_options,function(key,val){
                if(key==0){
                    content += '<label class="rsvp-radio"><input class="rsvp-button" type="radio" name="meal_preference" checked value="'+val+'"><span class="radio-state"></span>'+section.meal_preference.options[val]+'</label>';
                }else{
                    content += '<label class="rsvp-radio"><input class="rsvp-button" type="radio" name="meal_preference" value="'+val+'"><span class="radio-state"></span>'+section.meal_preference.options[val]+'</label>';
                }
            });
            content += '</div>'+
            '</div>'; 
            if(section.allergic.show=='yes'){
                content += '<div class="row rsvp-options">'+
                                    '<div class="rsvp-each-option m-0"><div class="rsvp-question" style="margin-top: .7rem;margin-left:.7rem;width:100%;text-align:left;">Allergies</div>';
                jQuery.each(section.allergic.visible_options,function(key,val){
                    if(key==0){
                        content += '<label class="rsvp-radio"><input class="rsvp-button" type="checkbox" checked name="allergic" value="'+val+'"><span class="radio-state"></span>'+section.allergic.options[val]+'</label>';
                    }else{
                        content += '<label class="rsvp-radio"><input class="rsvp-button" type="checkbox" name="allergic" value="'+val+'"><span class="radio-state"></span>'+section.allergic.options[val]+'</label>';
                    }
                });
                content += '</div>'+
                '</div>'; 
                content += 
                '<div class="row allergic_additional d-none">'+
                    '<div class="col-sm-12">'+
                        '<input type="text" id="other_details_allergic" placeholder="(Kindly Specify)" class="rsvp-input" style="margin-bottom: 20px;" />'+
                    '</div>'+
                '</div>';
            }
            if(section.main_course.show=='yes'){
                content += '<div class="row rsvp-options">'+
                '<div class="rsvp-each-option m-0"><div class="rsvp-question" style="margin-top: .7rem;margin-left:.7rem;width:100%;text-align:left;">Main Course</div>';
                jQuery.each(section.main_course.visible_options,function(key,val){
                    if(key==0){
                        content += '<label class="rsvp-radio"><input class="rsvp-button" checked type="radio" name="main_course" value="'+val+'"><span class="radio-state"></span>'+section.main_course.options[val]+'</label>';
                    }else{
                        content += '<label class="rsvp-radio"><input class="rsvp-button" type="radio" name="main_course" value="'+val+'"><span class="radio-state"></span>'+section.main_course.options[val]+'</label>';
                    }
                });
                content += '</div>'+
                '</div>';  
            }
        }
        content += '</div>';
        content+='<div class="row">'+
        '<div class="col-sm-12 text-center">'+
            '<button id="rsvp_submit" class="rsvp-submit">Send RSVP</button>'+
        '</div>'+
        /* '<div class="col-sm-12 text-center view-guestbook-wrapper">'+
            '<a class="view-guestbook" target="_blank">View Guestbook</a>'+
            '</div>'+ */
        '</div>';
    }else{
        var content  = '<div class="section-content rsvp-wrapper text-center">'+
        '<div class="rsvp-question">'+rsvpQuestion+'</div>'+
        '<div class="row rsvp-options">'+
       '<span class="error-red-text attendance-error d-none">This field is mandatory.</span>'+
           '<div class="rsvp-each-option">'+
                '<label class="rsvp-radio"><input class="rsvp-button" type="radio" name="stats_attend" value="attending"><span class="radio-state"></span> Yes. I\'ll be there in person</label>'+
                attendVirtually+
                '<label class="rsvp-radio"><input class="rsvp-button" type="radio" name="stats_attend" value="not_attending"><span class="radio-state"></span> No. I can\'t attend</label>'+
                '<label class="rsvp-radio"><input class="rsvp-button" type="radio" name="stats_attend" value="not_sure"><span class="radio-state"></span> I\'m not sure</label>'+
            '</div>'+
        '</div>'+
        '<div class="rsvp-form">'+
            '<div class="row d-none" id="guest_section">'+
                '<div class="col-sm-12">'+
                    '<input type="text" id="guest_count" placeholder="No. of guests attending" class="rsvp-input"/>'+
                '</div>'+
            '</div>'+
            '<div class="row">'+
           '<div class="col-sm-6 name-email-margin">'+
                '<input type="text" id="rsvp-name" placeholder="Your Name" class="rsvp-input">'+
                '<span class="error-red-text name-error d-none">This field is mandatory.</span>'+
            '</div>'+
                '<div class="col-sm-6 name-email-margin">'+
                    '<input type="text" id="rsvp-email" placeholder="Email" class="rsvp-input"/>'+
                    '<span class="error-red-text email-error d-none">This field is mandatory.</span>'+
                '</div>'+
           '</div>'+
            '<div class="row">'+
                '<div class="col-sm-12">'+
                '<div class="rsvp-text-area-block">'+
                    '<textarea placeholder="Message for couple (optional)" id="rsvp-message" class="rsvp-text-area" rows="3"></textarea>'+
                '</div></div>'+
                '</div>'+
                /* '<div class="text-left include-guestbook">'+
                ' <label for="include_guestbook">'+
                    '<input type="checkbox" id="include_guestbook" name="include_guestbook" value="1">Include my message in the Guestbook.'+
                        '<span class="checkbox_guestbook"></span>'+
                    '</label>'+
                '</div>'+ */
                '<div class="row">'+
                    '<div class="col-sm-12 text-center">'+
                        '<button id="rsvp_submit" class="rsvp-submit">Send RSVP</button>'+
                    '</div>'+
                 /*    '<div class="col-sm-12 text-center view-guestbook-wrapper">'+
                        '<a class="view-guestbook" target="_blank">View Guestbook</a>'+
                    '</div>'+ */
                '</div>'+
        '</div>'+
        '</div>';
    }
    if (layoutFour.indexOf(siteTheme) > -1) { content = '<div class="section-content-wrapper">' + content + '</div>'; }
    return content;
}
/* Add RSVP Section Ends */

/* Add Guestbook Section Starts */
function getGuestbookContent() {
    var content  =  '<div class="guest_book_form section-content">'+
                        '<div class="w-100 text-center">'+
                            '<div class="rsvp-wrapper">'+
                                '<div class="subtitile">'+
                                    'Leave a message for the couple!'+
                                '</div>'+
                                // '<div class="guestbook-note">Other guests will be able to read your message.</div>'+
                                '<div class="inner-wrapper guest_book_form_wrapper">'+
                                    '<div class="row">'+
                                        '<div class="col-sm-6 name-email-margin">'+
                                            '<input id="gname" type="text" name="fname" placeholder="Your Name">'+
                                            '<span class="error-red-text gname-error d-none">This field is mandatory.</span>'+
                                        '</div>'+
                                        '<div class="col-sm-6 name-email-margin">'+
                                            '<input id="gemail" type="email" name="mail" placeholder="Email">'+
                                            '<span class="error-red-text gemail-error d-none">This field is mandatory.</span>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row">'+
                                        '<div class="col-sm-12">'+
                                            '<textarea class="message" id="gmessage" maxlength="125" placeholder="Your message" name="note" style="text-transform:none;"></textarea>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row">'+
                                        '<div class="col-sm-12 text-center guestbook-submit-wrapper">'+
                                            '<button class="rsvp-submit" id="guestbook_submit">Share Your Message</button>'+
                                        '</div>'+
                                      /*   '<div class="col-sm-12 text-center view-guestbook-wrapper">'+
                                            '<a class="view-guestbook" target="_blank">View Guestbook</a>'+
                                        '</div>'
                                    '</div>'+ */
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
    if (layoutFour.indexOf(siteTheme) > -1) { content = '<div class="section-content-wrapper">' + content + '</div>'; }
    return content;
}
/* Add Guestbook Section Ends */

/* Add Virtual Wedding Section Starts */
function getLiveStreamDetails () {
    var data = { 'registry_url': regurl }, url = customBaseURL+'/weddingwebsite/index/getVirtualWeddingDetails';
    $.ajax({
        type: 'POST', dataType: 'json', data: data, url: url,
        success: function (data) {
            if (data.result == 'success') {
              virtual_services_details = data.details;
                setLiveStreamDetails(data);
                jQuery.each(virtual_services_details,function(val){
                  var x = setInterval(function() {
                    eventDetails = JSON.parse(virtual_services_details[val].event_details);
                    var start_time = eventDetails[0];
                    var end_time = eventDetails[1];
                    var countDownDateStart = new Date(""+start_time+"").getTime();
                    var countDownDateEnd = new Date(""+end_time+"").getTime();
                    if(virtual_services_details[val].live_stream_purchased!=null) {
                      if((eventDetails[3]=='live_streaming' || eventDetails[3]=='live_streaming_plus') && (virtual_services_details[val].live_stream_purchased==0)) {
                          jQuery.each(virtual_services_details,function(sub_val){
                              jQuery('a[data-id="'+virtual_services_details[sub_val].entity_id+'"]').parent().remove();
                          });
                      }
                    } else if(virtual_services_details[val].guest_party_purchased!=null) {
                      if((eventDetails[3]=='guest_party') && virtual_services_details[val].guest_party_purchased==0){
                          jQuery.each(virtual_services_details,function(sub_val){
                              jQuery('a[data-id="'+virtual_services_details[sub_val].entity_id+'"]').parent().remove();
                          });
                      }
                    } else {
                    // jQuery.each(virtual_services_details,function(sub_val){
                          jQuery('a[data-id="'+virtual_services_details[val].entity_id+'"]').parent().remove();
                    // });
                    }
                      var now = new Date();
                      var currentOffset = now.getTimezoneOffset();
                      var istOffset = 330;
                      var istTime = new Date(now.getTime() + (istOffset + currentOffset) * 60000).getTime();
                      var distance = countDownDateStart - istTime;
                      var days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
                      var hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                      var minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
                      var seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));
                      var selectedTimerElement = document.getElementById("virtual-countdown-"+virtual_services_details[val].entity_id);
                      var selectedGuestPartyElement = jQuery('.view-guest-party[data-id="'+virtual_services_details[val].entity_id+'"]')
                      if (istTime < countDownDateStart) {
                          if (selectedTimerElement) {
                              if(days<1){
                                  selectedTimerElement.innerHTML = hours + "h " + minutes + "m " + seconds + "s to go";
                              }else{
                                    selectedTimerElement.innerHTML = days + " day" + ((days > 1) ? "s" : "") + " to go";
                              }
                          }
                      }else if (istTime > countDownDateStart && istTime < countDownDateEnd){
                          selectedTimerElement.innerHTML ="Currently Live";
                      }else if(istTime > countDownDateEnd){
                        if (selectedTimerElement) {
                          if(eventDetails[3]=='guest_party'){
                              selectedGuestPartyElement.parent().remove();
                          }else{
                              if(days<1){
                                  selectedTimerElement.innerHTML = hours + "h "
                                  + minutes + "m " + seconds + "s ago";
                              }else{
                                  selectedTimerElement.innerHTML = days+" days ago";
                              }
                          }
                        }
                      }
                    }, 1000);
                })
            }
        }, error: function () {
            virtualWeddingLoaded = true;
            hideInitialLoader();
        }
    });
}
function updateThankyouNote () {
    var content = '', sections = content_data.sections;
    for (index in sections) {
        if (sections[index].type == 'post_wedding') {
            content = sections[index].content;
        }
    }
    if (!isEmpty(content)) {
        jQuery('.thanks-banner').html(content);
    }
}
function setLiveStreamDetails(data){
    var visibleSections='';
    visibleSections = content_data.visible_sections;
    if((visibleSections!='') && (doc_html_loaded==1)){
        updateWeddingDateCounter(data.wedding_date, visibleSections);
        /* var hasVirtualWeddingDetails = (data && data.details) ? (Object.keys(data.details).length > 0) : false;
        if (jQuery.inArray("virtual_wedding", visibleSections) > -1 && hasVirtualWeddingDetails) {
            getVirtualWeddingContent(data.details);
            jQuery('#join_virtually').removeAttr('style').removeClass('d-none');
            if (data.details.live_stream) {
                updateLiveStreamSection(data.details.live_stream);
            }
            if (data.details.guest_party) {
                updateGuestPartySection(data.details.guest_party);
            }
        } */
        updateSectionHeightStatus();
        virtualWeddingLoaded = true;
        hideInitialLoader();
    }else{
        setTimeout(function(){
            setLiveStreamDetails(data); 
        },200)
    }
}
function updateSectionHeightStatus () {
    if (typeof (window.updateWeddingContentPosition) == 'function') { updateWeddingContentPosition(); }
    if (typeof (window.updateSectionMinHeight) == 'function') { updateSectionMinHeight(); }
    if (typeof (window.updateContentSectionHeights) == 'function') { updateContentSectionHeights(); }
    if (typeof (window.setHeaderActiveState) == 'function') { setHeaderActiveState(); }
}
/* Add Virtual Wedding Section Ends */

/* Other Common Functions */
function loadAudio () {
    var path, searches, viewMode = '';
    path = content_data.audioPath;
    if (!isEmpty(path)) {
        $(".audio-div").append('<audio loop id="mymusic" controls="controls"><source src="' + path + '" type="audio/mpeg"></audio>');
        searches = location.search.substr(1).split('&');
        for (i = 0; i < searches.length; i++) {
            if (searches[i].indexOf('view=') == 0) {
                viewMode = searches[i].substr(5);
            }
        }
        if (viewMode != 'mobile') {
            $("#mymusic").get(0).play();
        }
        setTimeout(function () {
            if (!!Array.prototype.find.call(document.querySelectorAll('audio,video'), function (elem) { return elem.duration > 0 && !elem.paused })) {
                $("body").prepend('<div class="play-music"><img id="thumb-image" class="thumb-image fa-pause-circle" src="images/sound-on.png"><span class="unmute" style="font-size: 14px;position: relative;left: 5px;color: rgb(0, 0, 0);text-transform: uppercase;font-weight: 500;display: inline-block;overflow: hidden;vertical-align: middle;">Tap To Mute</span></div>');
            } else {
                $("body").prepend('<div class="play-music"><img id="thumb-image" class="thumb-image fa-play-circle" src="images/sound-off.png"><span class="unmute" style="font-size: 14px;position: relative;left: 5px;color: rgb(0, 0, 0);text-transform: uppercase;font-weight: 500;display: inline-block;overflow: hidden;vertical-align: middle;">Tap To Unmute</span></div>');
            }
        }, 2000);
        setTimeout(function () { jQuery(".unmute").hide("slide", { direction: "left" }, 1000); }, 6000);
    }
}
function isEmpty(value) {
    return (typeof (value) == 'undefined' || value == '' || value == null);
}
function showOverlay(message) {
    jQuery("#ww-overlay").attr('style', 'display: flex;');
    jQuery("#ww-overlay-message").html(message);
}
function hideOverlay() {
    jQuery("#ww-overlay").hide();
    jQuery("#ww-overlay-message").html("");
}
function nl2br (content) {
    if (isEmpty(content)) {
        return '';
    }
    return content.replace(/(\r\n|\n\r|\r|\n)/g, '<br>');
}
function hideInitialLoader () {
    if (productLoaded && virtualWeddingLoaded) {
        setTimeout(function () {
            $('#loading').hide();scrollToSection();
            if (typeof loadStickyHeader === "function") {
                loadStickyHeader();
            }
        }, 500);
    }
}
function scrollToSection () {
    var hashSubstring = window.location.hash.substr(1);
    if (hashSubstring) {
        jQuery('html, body').animate({
            scrollTop: jQuery('#'+hashSubstring).offset().top
        }, 'slow');
    }
}
function stringToCapitalize(str){
    var strs = str.toLowerCase().split(' ');
    for (var i = 0; i < strs.length; i++) { strs[i] = strs[i].substr(0, 1).toUpperCase() + strs[i].substr(1, (strs[i].length - 1)); }
    return strs.join(' ');
}
