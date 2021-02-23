'use strict';
{
    const $docs = document;
    const $submit = $docs.querySelector('input[name=submit]')
    const $form = $docs.querySelector('form')
    const $tbody = $docs.getElementById('tbody');
    

    $submit.addEventListener('click', e => {
        e.preventDefault()

        const $date = $docs.querySelector('input[name=date]').value
        const $where = $docs.querySelector('input[name=where]').value
        const $what = $docs.querySelector('input[name=what]').value
        const $price = $docs.querySelector('input[name=price]').value

        const tr = $docs.createElement('tr')
        const lists = []
        lists.push($date, $where, $what, $price)
        lists[3] = lists[3] + '円'
        
        for(let i = 0; i < lists.length; i++){
            var row = $docs.createElement('td')
            row.innerHTML = lists[i]
            tr.appendChild(row)
            $tbody.appendChild(tr)
        }

        
        console.log(lists);
        $form.reset()







    })

}