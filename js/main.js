$(document).ready(function () {
    $.get("https://ipinfo.io/?token=3fc52bf30957ed",
        function (data) {
            console.log(data);
            console.log(data.city);
            console.log(data.country);
            console.log(data.loc);
            console.log(data.region);
            console.log(data.timezone);
            $("#data").append(`
                <ul>
                    <li>
                        <span>Your IP :</span> ${data.ip}
                    </li>
                    <li>
                        <span>Your City :</span> ${data.city}
                    </li>
                    <li>
                        <span>Your Country :</span> ${data.country}
                    </li>
                    <li>
                        <span>Your Location ID :</span> ${data.loc}
                    </li>
                    <li>
                        <span>Your Region :</span> ${data.region}
                    </li>
                    <li>
                        <span>Your Timezone :</span> ${data.timezone}
                    </li>
                </ul>
            `);
        },
        "json"
    );
});