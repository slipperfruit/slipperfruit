async function vatsim() {
    const url = "https://api.cors.lol/?url=https://api.vatsim.net/v2/members/1853215/status";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        document.getElementById('vatsimLive').innerHTML = `<a href=https://vatsim-radar.com/?pilot=1853215 target="_blank">${json.callsign}</a> | ${json.fp.aircraft.split('/')[0]}<br \>${json.fp.dep}/${json.fp.arr}`;
    } catch (error) {
        console.error(error.message);
        document.getElementById('vatsimLive').innerText = 'Offline \u{1F622}';
    }
}

vatsim();