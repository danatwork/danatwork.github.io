// -----------------------------------------------
// This function creates an event in the timeline.
// -----------------------------------------------
function createEventElement(eventData, durationInMinutes) {
  const event = document.createElement('div');
  event.classList.add('event');
  if (eventData.name === 'Passing') {
    event.classList.add('passing');
	event.style.height = `${durationInMinutes * 2}px`; // Adjust this multiplier based on your design
  }
  else {
	  if(eventData.name == 'Homeroom' || eventData.name == 'Recess')
		  inline = 'inline';
	  else
		  inline = '';
	  var foundDate = calendar.find(item => item.date == givenDate);
      var friendlyName = translateBlockToPeriod(eventData.name,foundDate.start);
	  event.style.height = `${durationInMinutes * 2 - 1}px`; // Adjust this multiplier based on your design
	  event.innerHTML = `
		<div class="time ${inline}">${eventData.start} - ${eventData.end}</div>
		<div class="description ${inline}">${friendlyName}</div>
	  `;  
  }
  return event;
}

// -----------------------------------------------
// Helper function to calculate (in min) the length of an event
// -----------------------------------------------
function calculateDuration(start, end) {
  const startParts = start.split(':');
  const endParts = end.split(':');

  const startHour = parseInt(startParts[0], 10);
  const startMinute = parseInt(startParts[1], 10);
  const endHour = parseInt(endParts[0], 10);
  const endMinute = parseInt(endParts[1], 10);

  return (endHour - startHour) * 60 + (endMinute - startMinute);
}

// -----------------------------------------------
// This moves the indicator dot along the timeline
// It will also adjust the current time, if we're tracking current time
// It will also update the summary to the new time
// -----------------------------------------------
function updateIndicatorPosition() {
	
	// We should increment the minute in the givenTime if we step over the next minute
	// If we don't have a warning showing and the givenDate is the same as the currentDate and
	// givenTime is a minute behind currentTime, we should assume it's the next minute and autoincrement.
	if(document.getElementById('warning').style.display == 'none' &&
	   givenDate == moment().format('MM/DD/YYYY') &&
	   moment() > givenTime &&
	   moment().subtract(2, 'minutes') < givenTime)
	{
		   givenTime = moment(moment().format('HH:mm'),'HH:mm');
		   document.getElementById('timeInput').value = givenTime.format('HH:mm');
	}
		
	var jsTime = givenTime.toDate();
	const hours = jsTime.getHours()-8;
	const minutes = jsTime.getMinutes();
	const totalMinutes = hours * 60 + minutes;
	const pixelsPerMinute = 2; // Adjust this based on your design

	// Move the indicator
	var indicator;
	indicator = document.querySelector('#indicatorA');
	indicator.style.top = `${totalMinutes * pixelsPerMinute}px`;
	indicator = document.querySelector('#indicatorB');
	indicator.style.top = `${totalMinutes * pixelsPerMinute}px`;
	indicator = document.querySelector('#indicatorC');
	indicator.style.top = `${totalMinutes * pixelsPerMinute}px`;
	indicator = document.querySelector('#indicatorD');
	indicator.style.top = `${totalMinutes * pixelsPerMinute}px`;
	indicator = document.querySelector('#indicatorE');
	indicator.style.top = `${totalMinutes * pixelsPerMinute}px`;

	if(givenDate != moment().format('MM/DD/YYYY') || 
	   givenTime.format('HH:mm') != moment().format('HH:mm'))
		document.getElementById('warning').style.display = 'block';
	else
		document.getElementById('warning').style.display = 'none';


	// -----------------------------------------------
	// Give a brief summary of where we currently are at the top.
	// -----------------------------------------------
	var foundDate = calendar.find(item => item.date == givenDate);
	
	if(foundDate.type == 'block')
	{
		// Find the period in each timeline
		var foundRangeA = blockPeriodsA.find(range => {
		  var start = moment(range.start, 'HH:mm');
		  var end = moment(range.end, 'HH:mm');
		  return givenTime.isBetween(start, end, null, '[)');
		});
		var foundRangeB = blockPeriodsB.find(range => {
		  var start = moment(range.start, 'HH:mm');
		  var end = moment(range.end, 'HH:mm');
		  return givenTime.isBetween(start, end, null, '[)');
		});
		var foundRangeC = blockPeriodsC.find(range => {
		  var start = moment(range.start, 'HH:mm');
		  var end = moment(range.end, 'HH:mm');
		  return givenTime.isBetween(start, end, null, '[)');
		});
		
		if (foundRangeA.name == foundRangeB.name && foundRangeB.name == foundRangeC.name) {
		  var friendlyName = translateBlockToPeriod(foundRangeA.name,foundDate.start);
		  document.querySelector('#summary').innerHTML = `${givenTime.format('HH:mm')} falls within the ${friendlyName} time range.`;
		} else {
		  document.querySelector('#summary').innerHTML = `${givenTime.format('HH:mm')} falls within the ${document.querySelector('#timelineAhead').innerHTML} ${foundRangeA.name} time range.<br />`;
		  document.querySelector('#summary').innerHTML += `${givenTime.format('HH:mm')} falls within the ${document.querySelector('#timelineBhead').innerHTML} ${foundRangeB.name} time range.<br />`;
		  document.querySelector('#summary').innerHTML += `${givenTime.format('HH:mm')} falls within the ${document.querySelector('#timelineChead').innerHTML} ${foundRangeC.name} time range.<br />`;
		}
	} else if (foundDate.type == 'all')
	{
		// Find the period in each timeline
		var foundRangeA = allPeriodsA.find(range => {
		  var start = moment(range.start, 'HH:mm');
		  var end = moment(range.end, 'HH:mm');
		  return givenTime.isBetween(start, end, null, '[)');
		});
		var foundRangeB = allPeriodsB.find(range => {
		  var start = moment(range.start, 'HH:mm');
		  var end = moment(range.end, 'HH:mm');
		  return givenTime.isBetween(start, end, null, '[)');
		});
		
		if (foundRangeA.name == foundRangeB.name) {
		  var friendlyName = translateBlockToPeriod(foundRangeA.name,foundDate.start);
		  document.querySelector('#summary').innerHTML = `${givenTime.format('HH:mm')} falls within the ${friendlyName} time range.`;
		} else {
		  document.querySelector('#summary').innerHTML = `${givenTime.format('HH:mm')} falls within the ${document.querySelector('#timelineDhead').innerHTML} ${foundRangeA.name} time range.<br />`;
		  document.querySelector('#summary').innerHTML += `${givenTime.format('HH:mm')} falls within the ${document.querySelector('#timelineEhead').innerHTML} ${foundRangeB.name} time range.<br />`;
		}
		
	}
}

// -----------------------------------------------
// This adds all of the events to the timeline
// -----------------------------------------------
function initializeTimeline(timeline,eventsData) {

	//Hacky way to initialize a timeline by removing all elements except for the indicator
	const indicatorElement = timeline.querySelector('.indicator');
	while (timeline.firstChild !== indicatorElement) {
	  timeline.removeChild(timeline.firstChild);
	}
	while (timeline.lastChild !== indicatorElement) {
	  timeline.removeChild(timeline.lastChild);
	}

	
    for (let i = 0; i < eventsData.length; i++) {
        const eventData = eventsData[i];
    
		// Add a bar between events
		if(i > 0) {
			const bar = document.createElement('div');
			bar.classList.add('bar');
			timeline.appendChild(bar);
		}
		
        const duration = calculateDuration(eventData.start, eventData.end);
        const event = createEventElement(eventData, duration);
        timeline.appendChild(event);
    }
	
	// Set the position of the indicator
	updateIndicatorPosition();
  
	// Update the indicator every 15s
	setInterval(() => {updateIndicatorPosition();}, 15000); 
}
