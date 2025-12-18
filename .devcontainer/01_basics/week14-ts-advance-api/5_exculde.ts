// Exclude: Here we simply exclude one type from the main type

type event = 'click' | 'scroll' | 'mousemove'

type excluded_event = Exclude<event, 'click'>

function eventHandler(event_type: excluded_event) {
    console.log(`This is "${event_type}" event`);
}

eventHandler('mousemove')
// eventHandler('click') Error