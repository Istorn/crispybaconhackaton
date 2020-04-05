export default function update_stats_screen(ritmo,kmPercorsi){
    document.getElementById('ritmo').innerHTML=ritmo.toFixed(2).toString()+" Km/h";
    document.getElementById('kmPercorsi').innerHTML=kmPercorsi.toFixed(3).toString()+" Km";
}