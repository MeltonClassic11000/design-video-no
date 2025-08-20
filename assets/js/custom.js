jQuery(function ($) {
    var siteUrl = $('#siteUrl').val();

    if ($('.logo-slider .slider')[0]) {
        $('.logo-slider .slider').slick({
            speed: 6000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 5,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
            focusOnSelect: false,
            pauseOnHover: false,
            draggable: false,
            swipe: false,
            touchMove: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }

    ////project-slider


    if ($('.our-portfolio .slider-left')[0]) {
        $('.our-portfolio .slider-left').slick({
            lazyLoad: 'ondemand',
            speed: 6000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            focusOnSelect: false,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }

    if ($('.our-portfolio .slider-right')[0]) {
        $('.our-portfolio .slider-right').slick({
            lazyLoad: 'ondemand',
            rtl: true,
            speed: 6000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            focusOnSelect: false,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }// === U.S. Names (100+)
    const usFullNames = [
        "James Smith", "John Johnson", "Robert Williams", "Michael Brown", "William Jones",
        "David Miller", "Richard Davis", "Joseph Garcia", "Thomas Rodriguez", "Charles Martinez",
        "Christopher Hernandez", "Daniel Lopez", "Matthew Gonzalez", "Anthony Wilson", "Donald Anderson",
        "Mark Thomas", "Paul Taylor", "Steven Moore", "Andrew Jackson", "Kenneth Martin",
        "George Lee", "Joshua Perez", "Kevin Thompson", "Brian White", "Edward Harris",
        "Ronald Sanchez", "Timothy Clark", "Jason Ramirez", "Jeffrey Lewis", "Ryan Robinson",
        "Jacob Walker", "Gary Young", "Nicholas Allen", "Eric King", "Stephen Wright",
        "Jonathan Scott", "Larry Torres", "Justin Nguyen", "Scott Hill", "Brandon Flores",
        "Benjamin Green", "Samuel Adams", "Gregory Nelson", "Frank Baker", "Alexander Hall",
        "Raymond Rivera", "Patrick Campbell", "Jack Mitchell", "Dennis Carter", "Jerry Roberts",
        "Tyler Gomez", "Aaron Phillips", "Jose Evans", "Adam Turner", "Henry Diaz",
        "Nathan Parker", "Douglas Cruz", "Zachary Edwards", "Peter Collins", "Kyle Stewart",
        "Walter Morris", "Ethan Rogers", "Jeremy Reed", "Harold Cook", "Keith Morgan",
        "Christian Bell", "Roger Murphy", "Noah Bailey", "Gerald Cooper", "Carl Richardson",
        "Terry Cox", "Sean Howard", "Austin Ward", "Arthur Torres", "Lawrence Peterson",
        "Jesse Gray", "Dylan Ramirez", "Bryan James", "Joe Watson", "Jordan Brooks",
        "Billy Kelly", "Bruce Sanders", "Albert Price", "Willie Bennett", "Gabriel Wood",
        "Logan Barnes", "Alan Ross", "Juan Henderson", "Wayne Coleman", "Roy Jenkins",
        "Mary Perry", "Patricia Powell", "Jennifer Long", "Linda Patterson", "Elizabeth Hughes",
        "Susan Flores", "Jessica Washington", "Sarah Butler", "Karen Simmons", "Nancy Foster",
        "Lisa Bryant", "Margaret Alexander", "Betty Russell", "Sandra Griffin", "Ashley Diaz",
        "Dorothy Hayes", "Kimberly Myers", "Emily Ford", "Donna Hamilton", "Michelle Graham"
    ];

    const usCities = [
        "New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ",
        "Philadelphia, PA", "San Antonio, TX", "San Diego, CA", "Dallas, TX", "San Jose, CA",
        "Austin, TX", "Jacksonville, FL", "Fort Worth, TX", "Columbus, OH", "Charlotte, NC",
        "San Francisco, CA", "Indianapolis, IN", "Seattle, WA", "Denver, CO", "Washington, DC",
        "Boston, MA", "El Paso, TX", "Nashville, TN", "Detroit, MI", "Oklahoma City, OK",
        "Portland, OR", "Las Vegas, NV", "Memphis, TN", "Louisville, KY", "Baltimore, MD",
        "Milwaukee, WI", "Albuquerque, NM", "Tucson, AZ", "Fresno, CA", "Sacramento, CA",
        "Mesa, AZ", "Kansas City, MO", "Atlanta, GA", "Omaha, NE", "Colorado Springs, CO",
        "Raleigh, NC", "Miami, FL", "Long Beach, CA", "Virginia Beach, VA", "Oakland, CA",
        "Minneapolis, MN", "Tulsa, OK", "Arlington, TX", "Tampa, FL", "New Orleans, LA",
        "Wichita, KS", "Bakersfield, CA", "Cleveland, OH", "Aurora, CO", "Anaheim, CA",
        "Honolulu, HI", "Santa Ana, CA", "Riverside, CA", "Corpus Christi, TX", "Lexington, KY",
        "Stockton, CA", "Henderson, NV", "Saint Paul, MN", "St. Louis, MO", "Cincinnati, OH",
        "Pittsburgh, PA", "Greensboro, NC", "Anchorage, AK", "Plano, TX", "Lincoln, NE",
        "Orlando, FL", "Irvine, CA", "Newark, NJ", "Toledo, OH", "Durham, NC",
        "Chula Vista, CA", "Fort Wayne, IN", "Jersey City, NJ", "St. Petersburg, FL",
        "Laredo, TX", "Madison, WI", "Chandler, AZ", "Buffalo, NY", "Lubbock, TX",
        "Scottsdale, AZ", "Reno, NV", "Glendale, AZ", "Gilbert, AZ", "Winston–Salem, NC",
        "North Las Vegas, NV", "Norfolk, VA", "Chesapeake, VA", "Garland, TX", "Irving, TX",
        "Hialeah, FL", "Fremont, CA", "Boise, ID", "Richmond, VA", "Baton Rouge, LA",
        "Spokane, WA", "Des Moines, IA", "Tacoma, WA", "San Bernardino, CA", "Modesto, CA",
        "Fontana, CA", "Germantown, MD" // Add your specific city here
    ];

    const services = ["requested a quote", "bought Basic Plan", "bought Standard Plan", "bought Premium Plan", "bought Combo Plan", "requested FREE Consultancy", "received basic website", "received Shopify store", "received business website", "received corporate website"];

    const plans = [
        { name: "Basic Web Design", price: 400, service: "Website Design" },
        { name: "Standard Web Design", price: 700, service: "Website Design" },
        { name: "Premium Web Design", price: 1000, service: "Website Design" }
    ];

    function showAlert() {
        const name = usFullNames[Math.floor(Math.random() * usFullNames.length)];
        const city = usCities[Math.floor(Math.random() * usCities.length)];
        const service = services[Math.floor(Math.random() * services.length)];

        const matchingPlans = plans.filter(p => p.service === service);
        const plan = matchingPlans.length
            ? matchingPlans[Math.floor(Math.random() * matchingPlans.length)]
            : { name: "Custom Plan" };

        const isDay = Math.random() < 0.3;
        let timeText;

        if (isDay) {
            const daysAgo = Math.floor(Math.random() * 3) + 1;
            timeText = `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago.`;
        } else {
            const hoursAgo = Math.floor(Math.random() * (8 - 2 + 1)) + 2;
            timeText = `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago.`;
        }

        // Create the message
        const message = `<p><strong>${name}</strong> <br><span style="font-size: 10px;">${service}</span> <br><span style="font-size: 8px; opacity: .8;">${city} - ${timeText}</span></p>`;

        // Generate initials
        const nameParts = name.trim().split(" ");
        let initials = "";
        if (nameParts.length >= 2) {
            initials = nameParts[0][0] + nameParts[1][0];
        } else {
            initials = nameParts[0][0];
        }

        // Set HTML content and initials
        const $alert = $('.alert');
        $alert.find('.content').html(message);
        $alert.find('.avatar').text(initials.toUpperCase());
        $alert.stop(true, true).fadeIn().addClass('show');

        setTimeout(() => {
            $alert.fadeOut().removeClass('show');
        }, 10000);
    }

    $('.consultForm select').on('focus change', function () {
        if ($(this).val()) {
            $(this).closest('.form-floating-custom').addClass('active');
        } else {
            $(this).closest('.form-floating-custom').removeClass('active');
        }
    });

    $('#calendar').on('change', function () {
        let parent = $(this).closest('.form-floating-custom');
        if ($(this).val()) {
            parent.addClass('active');
        } else {
            parent.removeClass('active');
        }
    });

    // Run after 10s, then every 30s
    setTimeout(() => {
        showAlert();
        setInterval(showAlert, 20000);
    }, 6000);

    // Close button (works even if alert is loaded later)
    $(document).on('click', '.alert .btn-close', function () {
        $(this).closest('.alert').fadeOut();
    });

    // Open Chat ==============
    $(document).on('click', '#openChatBtn', function () {
        if (typeof Tawk_API !== 'undefined') {
            Tawk_API.maximize();
        } else {
            console.error("Tawk.to API is not loaded yet.");
        }
    });

    // Our Pricing Modal =================
    $('.card-pricing').on('click', function () {
        var plan = $('.card-title', this).text();
        var type = $('.card-title', this).attr('type');
        var price = $('.card-title', this).attr('price');
        $('.pricing-modal .modal-title').val(type + ' - ' + plan);
        $('.pricing-modal input.plan').val(type + ' - ' + plan);
        $('.pricing-modal input.price').val('$' + price);
    });

    $(document).on('click', '#pricingModalBtn', function () {
        var title = $(this).attr('title');
        console.log(title);
        $('.our-pricing .consultForm .plan').val(title);
        $('#pricingModal .modal-title').html(title);
        $('#pricingModal .contactnameform').val('Design Spartans - Ads - ' + title);
    });

    // Timer ========================
    //     $(".timer").each(function() {
    //         let timerElement = $(this);
    //         let startTime = parseInt(timerElement.attr("time")) * 1000; // Convert to milliseconds

    //         function startCountdown() {
    //             let now = new Date().getTime();
    //             let targetTime = startTime + 24 * 60 * 60 * 1000; // 24 hours from the given time

    //             function updateTimer() {
    //                 let currentTime = new Date().getTime();
    //                 let remainingTime = targetTime - currentTime;

    //                 if (remainingTime <= 0) {
    //                     // Reset the timer for another 24 hours
    //                     startTime = new Date().getTime();
    //                     targetTime = startTime + 24 * 60 * 60 * 1000;
    //                     remainingTime = targetTime - currentTime;
    //                 }

    //                 let hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    //                 let minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    //                 let seconds = Math.floor((remainingTime / 1000) % 60);

    //                 // Use jQuery to update the timer text
    //                 timerElement.find(".hours").text(hours.toString().padStart(2, "0"));
    //                 timerElement.find(".minutes").text(minutes.toString().padStart(2, "0"));
    //                 timerElement.find(".seconds").text(seconds.toString().padStart(2, "0"));
    //             }

    //             // Run immediately and then every second
    //             updateTimer();
    //             setInterval(updateTimer, 1000);
    //         }

    //         startCountdown();
    //     });
    $('.timer').each(function () {
        const timer = $(this); // The current timer element
        const targetDate = new Date(timer.attr("time")).getTime();

        // Update countdown every second
        setInterval(function () {
            const now = new Date().getTime();
            const distance = targetDate - now;

            // Calculate days, hours, minutes, and seconds
            //             const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

            // Display the result in the current timer
            //             timer.find("#days").text(days);
            timer.find("#hours").text(hours);
            timer.find("#minutes").text(minutes);
            timer.find("#seconds").text(seconds);

            // If countdown is finished
            if (distance < 0) {
                clearInterval();
                timer.html("Countdown Finished");
            }
        }, 1000);
    });

    $('#phone, #phone2, #phone3').on('input', function () {
        // Remove all non-digit characters
        let input = $(this).val().replace(/\D/g, '');

        // Remove leading '1' if someone types it manually
        if (input.startsWith('1')) {
            input = input.substring(1);
        }

        // Format the number
        let formatted = '+1';

        if (input.length > 0) {
            formatted += ' (' + input.substring(0, 3);
        }
        if (input.length >= 3) {
            formatted += ') ';
            formatted += input.substring(3, 6);
        }
        if (input.length >= 6) {
            formatted += '-' + input.substring(6, 10);
        }

        // Limit to +1 (XXX) XXX-XXXX
        $(this).val(formatted.substring(0, 17));
    });


    // Clear Button =============================================================
    const $input = $('#phone');
    // Wrap input in a container
    $input.wrap('<div class="input-wrapper" style="position: relative; display: inline-block;"></div>');
    // Create the clear button
    const $clearBtn = $('<span class="clear-btn" style="display: none; position: absolute; right: 10px; top: 50%; transform: translateY(-50%); cursor: pointer; font-size: 16px; color: #999;">&times;</span>');
    // Append clear button inside wrapper
    $input.after($clearBtn);
    // Show/hide button based on input value
    $input.on('input', function () {
        if ($(this).val().length > 0) {
            $clearBtn.show();
        } else {
            $clearBtn.hide();
        }
    });
    // Clear input on click
    $clearBtn.on('click', function () {
        $input.val('').trigger('input').focus();
        $(this).hide();
    });



    var videoModal = $('.video-modal');
    videoModal.on('show.bs.modal', function () {
        var parent = $(this);
        $('video', parent)[0].play();
    });
    videoModal.on('hide.bs.modal', function () {
        var parent = $(this);
        var video = $('video', parent)[0];
        video.pause();
        video.currentTime = 0;
    });

    // Reviews view more ===========
    $(document).on('click', '.readmore', function () {
        var parent = $(this);
        if ($(this).text() === "Read More") {
            $(this).text("Hide");
            parent.parent().addClass('show');
        } else {
            $(this).text("Read More");
            parent.parent().removeClass('show');
        }
    });


    if ($('.lazy')[0]) {
        $('.lazy').lazy({
            beforeLoad: function (element) {
                var imageSrc = element.data('src');
                console.log('image "' + imageSrc + '" is about to be loaded');
            },
            scrollDirection: 'vertical',
            effect: "fadeIn",
            effectTime: 1000,
            threshold: 0
        });
    }


    $('.navbar-nav .ast-menu-toggle').addClass('d-none');
    $(window).on('load', function () {
        setTimeout(function () {
            // Hero Banner Loop ==========================================
            var items = $('.hero .hero-slider li');
            var currentIndex = 0;

            setInterval(function () {
                items.removeClass('active');

                items.eq(currentIndex).addClass('active');

                currentIndex += 0;

                if (currentIndex >= items.length) {
                    currentIndex = 0;
                }

            }, 2000);

            $('.reviews-sliderr').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            });
        }, 2500);
    });

    // Google Reivews ======================================================
    // Function to load reviews via AJAX
    // function loadGoogleReviews() {
    //     const placeID = 'ChIJGf3_J7srtokRhJGq4mU15v4';
    //     const apiKey = 'AIzaSyCqn_6phmt0NXY_aZaF_Obbn6tiZgR8Yeg'; // Replace with your actual API key
    //
    //     const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=name,rating,reviews&key=${apiKey}`;
    //
    //     // Make an AJAX request to fetch reviews
    //     $.ajax({
    //         url: apiUrl,
    //         method: 'GET',
    //         dataType: 'json',
    //         success: function (data) {
    //             console.log(data)
    //             if (data.result && data.result.reviews) {
    //                 let reviewsHtml = `<h3>Reviews for ${data.result.name}</h3>`;
    //                 data.result.reviews.forEach(function (review) {
    //                     reviewsHtml += `
    //                         <div class="review">
    //                             <h4>${review.author_name}</h4>
    //                             <p>Rating: ${review.rating} / 5</p>
    //                             <p>${review.text}</p>
    //                             <hr>
    //                         </div>
    //                     `;
    //                 });
    //                 $('#reviews').html(reviewsHtml);
    //             } else {
    //                 $('#reviews').html('<p>No reviews found.</p>');
    //             }
    //         },
    //         error: function (err) {
    //             console.error(err);
    //             $('#reviews').html('<p>Failed to fetch reviews.</p>');
    //         }
    //     });
    // }
    //
    // $(window).on('load', function () {
    //     loadGoogleReviews();
    // });


    // Portfolio Load More ======================================
    $(document).on('click', '#load-more', function () {
        var button = $(this);
        var postId = $(this).attr('post-id');
        var currentPage = parseInt($(this).attr('page'));
        var parent = $(this).parent().parent().find('.row');

        // Increment the page number
        var nextPage = currentPage + 1;
        var tabId = $(this).attr('tab')

        // Update the page attribute with the new page number
        $(this).attr('page', nextPage);

        button.attr('disabled', true);
        button.css('opacity', '0.5');
        var data = {
            action: 'load_more_portfolio',
            page: nextPage,
            post_id: postId, // Pass the post ID
            tab_id: tabId, // Pass the post ID
        };

        $.ajax({
            url: siteUrl + '/wp-admin/admin-ajax.php',
            type: 'POST',
            data: data,
            success: function (response) {
                console.log(response);
                if (response) {
                    parent.append(response);
                    button.attr('disabled', false);
                    button.css('opacity', '1');
                } else {
                    button.hide(); // Hide button if no more items
                }
            },
            error: function (response) {
                console.log('error')
            }
        });
    });

});


jQuery(document).ready(function ($) {
    var $slider = $('.custom-slider');

    // Init slick (disable internal arrows)
    $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // ❌ disable internal arrows
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                    slidesToShow: 1
                }
            }

        ]
    });

    // ✅ Custom arrows click handlers
    $('.custom-prev').on('click', function () {
        $slider.slick('slickPrev');
    });

    $('.custom-next').on('click', function () {
        $slider.slick('slickNext');
    });

    // Equal height function
    // function equalizeCardHeights() {
    //   var maxHeight = 0;
    //   $('.slider-item .custom-grid').each(function () {
    //     $(this).css('height', 'auto');
    //     var height = $(this).outerHeight();
    //     if (height > maxHeight) {
    //       maxHeight = height;
    //     }
    //   });
    //   $('.slider-item .custom-grid').css('height', maxHeight + 'px');
    // }

    // Call on load, after change, and resize
    // $slider.on('setPosition afterChange', function () {
    //   equalizeCardHeights();
    // });
    // $(window).on('resize', function () {
    //   equalizeCardHeights();
    // });
    // equalizeCardHeights();

    // review readmore button

    


});
