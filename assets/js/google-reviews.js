jQuery(function ($) {
    var siteUrl = $('#siteUrl').val();

    // Google Reivews ======================================================
    // Function to load reviews via AJAX
    function loadGoogleReviews() {
        $.ajax({
            url: siteUrl + '/wp-admin/admin-ajax.php',
            type: 'POST',
            dataType: 'json',
            data: {
                action: 'fetch_google_reviews',
            },
            success: function(response) {
                if (response.success) {
                    var reviewsHtml = '';

                    // Loop through the reviews and build HTML
                    $.each(response.data, function(index, review) {
                        reviewsHtml += '<div class="google-review">';
                        reviewsHtml += '<h4>' + review.author_name + '</h4>';
                        reviewsHtml += '<p>Rating: ' + review.rating + '/5</p>';
                        reviewsHtml += '<p>' + review.text + '</p>';
                        reviewsHtml += '</div>';
                    });

                    $('#google-reviews-container').html(reviewsHtml);
                } else {
                    $('#google-reviews-container').html('<p>No reviews found.</p>');
                }
            },
            error: function() {
                $('#google-reviews-container').html('<p>Failed to load reviews.</p>');
            }
        });
    }

    $(window).on('load', function () {
        loadGoogleReviews();
    });


});
