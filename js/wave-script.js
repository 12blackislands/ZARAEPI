$(document).ready(function() {
    // Add dynamic cubic bezier wave movement
    function animateBoxes() {
        $('#wave-box1').each(function() {
            const randomX = Math.sin(Date.now() / 1000) * 5;
            const randomY = Math.cos(Date.now() / 1500) * 7;
            
            $(this).css({
                'transform': `translate(${randomX}px, ${randomY}px)`,
            });
        });
        
        $('#wave-box2').each(function() {
            const randomX = Math.sin(Date.now() / 1200) * 6;
            const randomY = Math.cos(Date.now() / 1300) * 8;
            
            $(this).css({
                'transform': `translate(${randomX}px, ${randomY}px)`,
            });
        });
        
        $('#wave-box3').each(function() {
            const randomX = Math.sin(Date.now() / 900) * 7;
            const randomY = Math.cos(Date.now() / 1800) * 6;
            
            $(this).css({
                'transform': `translate(${randomX}px, ${randomY}px)`,
            });
        });
        
        requestAnimationFrame(animateBoxes);
    }
    
    // Start the continuous animation
    animateBoxes();
    
    // Additional interactive wave effect on mouse movement
    $('body').on('mousemove', function(e) {
        const moveX = (e.pageX * -1/20);
        const moveY = (e.pageY * -1/20);
        
        $('.wave-grid').css({
            'transform': `translate3d(${moveX}px, ${moveY}px, 0)`,
            'transition': 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
    });
    
    // Wave transition effect when clicking any wave box
    $('.wave-box').on('click', function() {
        // Show transition overlay
        $('.wave-transition').addClass('active');
        
        // After delay, navigate to the corresponding project page
        setTimeout(function() {
            const boxId = $(this).attr('id');
            let destination;
            
            if (boxId === 'wave-box1') {
                destination = 'aut.html';
            } else if (boxId === 'wave-box2') {
                destination = 'fonterra.html';
            } else if (boxId === 'wave-box3') {
                destination = 'uoa.html';
            } else {
                destination = 'index.html';
            }
            
            window.location.href = destination;
        }.bind(this), 2000); // 2 second delay before navigating
    });
});