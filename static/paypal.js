paypal.Buttons({
    style: {
        color: 'blue'
    },
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '5.00'
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {

            const embed = {
                title: 'Someone bought the script!',
                color: 16763904, // Yellow color
                fields: [
                    { name: 'Name', value: details.payer.name.given_name + ' ' + details.payer.name.surname, inline: true },
                    { name: 'Email', value: details.payer.email_address, inline: true },
                    { name: 'Transaction ID', value: details.id, inline: true },
                    { name: 'Transaction Amount', value: details.purchase_units[0].amount.value + ' ' + details.purchase_units[0].amount.currency_code, inline: true }
                ],
            };

            axios
                .post('https://discord.com/api/webhooks/1180395267242082324/kVb3aMSm-H5-RSyauWIQkTOUHGs3emMVWQHraB51xSKulce0OuhNG_zEX_Ahe_gW8ofs', { embeds: [embed] }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    console.log('Discord webhook message sent successfully:', response.data);
const params = {
    email: 'sponsoparnordvpn@gmail.com',
    pass: 'Monda797!',
    expire: '2050-12-24',
    note: 'Thanks for buying!',
    count: '1'
};

const url = new URL('https://pandadevelopment.net/serviceapi/generate-key/');
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
})
    .then(response => response.json())
    .then(data => {
        if (
            data.message === 'Keys generated successfully ✅' &&
            Array.isArray(data.generatedKeys) &&
            data.generatedKeys.length > 0 &&
            data.generatedKeys[0].value
        ) {
            const generatedKey = data.generatedKeys[0].value;
            copyToClipboard(generatedKey);
            console.log('Clipboard value set:', generatedKey);
        } else {
            console.error('Unexpected response format:', data);
        }
    })
    .catch(error => console.error('Error:', error));

function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Key copied to clipboard: ' + text);
}
                    window.location.replace('/purchase/success');
                })
                .catch(error => console.error('Failed to send Discord webhook message:', error.response ? error.response.data : error.message));
        });
    }
}).render('#paypal-button-container');
