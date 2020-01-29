const results = JSON.parse(localStorage.getItem('votes'));
const votes = [];
const labels = [];

results.forEach(item => {
    votes.push(item.votes);
    labels.push(item.id);
});

const getResults = document.getElementById('results').getContext('2d');

new Chart(getResults, {
    type: 'bar',
    data: {
        labels: labels,
        datasets:[{ 
            label : 'Number of Votes',
            data: votes,
            backgroundColor:['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange', 'lightgreen', 'pink', 'lightyellow', 'lightpurple', 'brown', 'red', 'lightred', 'lightorange', 'lightpink']
        }]
    },
    options: {
        scales:{
            yAxes:[{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

});

document.getElementById('results').textContent = JSON.stringify(results, 0, 2);








