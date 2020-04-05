export default function update_stats_screen(ritmo,kmPercorsi){
    document.getElementById('ritmo').innerHTML=ritmo.toString()+" Km/h";
    document.getElementById('kmPercorsi').innerHTML=kmPercorsi.toString()+" Km";
}