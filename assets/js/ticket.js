 // Function to send WhatsApp message for each form type
 function sendWhatsAppMessage(formType, formData) {
    // Construct the message based on form type
    let message = `New ${formType} Booking Inquiry:\n\n`;
    
    // Construct message details based on form type
    switch(formType) {
        case 'Train':
            message += `From: ${formData.from}\n`;
            message += `To: ${formData.to}\n`;
            message += `Date: ${formData.date}\n`;
            message += `Travelers: ${formData.travelers}\n`;
            message += `Class: ${formData.class}\n`;
            break;
        
        case 'Flight':
            message += `From: ${formData.from}\n`;
            message += `To: ${formData.to}\n`;
            message += `Departure Date: ${formData.departureDate}\n`;
            message += `Return Date: ${formData.returnDate}\n`;
            message += `Travelers: ${formData.travelers}\n`;
            message += `Class: ${formData.class}\n`;
            break;
        
        case 'Hotel':
            message += `Location: ${formData.location}\n`;
            message += `Check-in: ${formData.checkIn}\n`;
            message += `Check-out: ${formData.checkOut}\n`;
            message += `Persons: ${formData.persons}\n`;
            message += `Rooms: ${formData.rooms}\n`;
            break;
        
        case 'Bus':
            message += `From: ${formData.from}\n`;
            message += `To: ${formData.to}\n`;
            message += `Date: ${formData.date}\n`;
            message += `Travelers: ${formData.travelers}\n`;
            break;
    }

    // WhatsApp API endpoint (replace with your preferred method)
    const phoneNumber = '916205420149';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');
}

// Add event listeners to all forms
document.addEventListener('DOMContentLoaded', () => {
    // Train Form
    document.querySelector('#nav-home form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            from: document.getElementById('inputAddress1').value,
            to: document.getElementById('inputAddress2').value,
            date: document.getElementById('inputdateOne').value,
            travelers: document.getElementById('travelers-train').value,
            class: document.getElementById('inputPersonOne').value
        };
        sendWhatsAppMessage('Train', formData);
    });

    // Flight Form
    document.querySelector('#nav-profile form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            from: document.getElementById('inputAddressThree').value,
            to: document.getElementById('inputAddressFour').value,
            departureDate: document.getElementById('inputDateThree').value,
            returnDate: document.getElementById('inputDateFour').value,
            travelers: document.getElementById('travelers-flight').value,
            class: document.getElementById('flight_class').value
        };
        sendWhatsAppMessage('Flight', formData);
    });

    // Hotel Form
    document.querySelector('#nav-contact form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            location: document.getElementById('inputAddressHotel').value,
            checkIn: document.getElementById('inputDateFive').value,
            checkOut: document.getElementById('inputDateSix').value,
            persons: document.getElementById('hotel-persons').value,
            rooms: document.getElementById('total-rooms').value
        };
        sendWhatsAppMessage('Hotel', formData);
    });

    // Bus Form
    document.querySelector('#nav-bus form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            from: document.getElementById('inputAddressbus').value,
            to: document.getElementById('inputAddressbusto').value,
            date: document.getElementById('inputDatebus').value,
            travelers: document.getElementById('travelers-bus').value
        };
        sendWhatsAppMessage('Bus', formData);
    });
});