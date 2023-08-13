function translateBlockToPeriod(block,startperiod)
{
	var friendlyName = block;
	if(block == 'Block 1') {
		friendlyName += " (period " + startperiod + ")";
	}
	else if(block == 'Block 2') {
		friendlyName += " (period " + ((startperiod+1)%6 + 1) + ")";
	}
	else if(block == 'Block 3') {
		friendlyName += " (period " + ((startperiod+3)%6 + 1) + ")";	
	}
	if(block == 'Class 1') {
		friendlyName += " (period " + startperiod + ")";
	}
	else if(block == 'Class 2') {
		friendlyName += " (period " + (startperiod%6 + 1) + ")";
	}
	else if(block == 'Class 3') {
		friendlyName += " (period " + ((startperiod+1)%6 + 1) + ")";	
	}
	else if(block == 'Class 4') {
		friendlyName += " (period " + ((startperiod+2)%6 + 1) + ")";	
	}
	else if(block == 'Class 5') {
		friendlyName += " (period " + ((startperiod+3)%6 + 1) + ")";	
	}
	else if(block == 'Class 6') {
		friendlyName += " (period " + ((startperiod+4)%6 + 1) + ")";	
	}
	return friendlyName;
}

const calendar = [
  { date: '08/07/2023', q: 1, type: 'modified', start: 1},
  { date: '08/08/2023', q: 1, type: 'modified', start: 1},
  { date: '08/09/2023', q: 1, type: 'all', start: 1},
  { date: '08/10/2023', q: 1, type: 'block', start: 1},
  { date: '08/11/2023', q: 1, type: 'block', start: 2},
  //{ date: '08/12/2023', type: 'block', start: },
  { date: '08/13/2023', q: 1, type: 'block', start: 1},
  { date: '08/14/2023', q: 1, type: 'block', start: 3},
  { date: '08/15/2023', q: 1, type: 'block', start: 4},
  { date: '08/16/2023', q: 1, type: 'block', start: 5},
  { date: '08/17/2023', q: 1, type: 'block', start: 6},
  //{ date: '08/18/2023', type: 'block', start: },
  //{ date: '08/19/2023', type: 'block', start: },
  
  //{ date: '08/20/2023', type: 'block', start: },
  { date: '08/21/2023', q: 1, type: 'block', start: 1},
  { date: '08/22/2023', q: 1, type: 'block', start: 2},
  { date: '08/23/2023', q: 1, type: 'block', start: 3},
  { date: '08/24/2023', q: 1, type: 'block', start: 4},
  { date: '08/25/2023', q: 1, type: 'all', start: 2},
  //{ date: '08/26/2023', type: 'block', start: },
  //{ date: '08/27/2023', type: 'block', start: },
  { date: '08/28/2023', q: 1, type: 'block', start: 5},
  { date: '08/29/2023', q: 1, type: 'block', start: 6},
  
  { date: '08/30/2023', q: 1, type: 'block', start: 1},
  { date: '08/31/2023', q: 1, type: 'block', start: 2},
  
  { date: '09/01/2023', q: 1, type: 'all', start: 3},
  //{ date: '09/02/2023', type: 'block', start: },
  //{ date: '09/03/2023', type: 'block', start: },
  //{ date: '09/04/2023', type: 'block', start: },
  { date: '09/05/2023', q: 1, type: 'block', start: 3},
  { date: '09/06/2023', q: 1, type: 'block', start: 4},
  { date: '09/07/2023', q: 1, type: 'block', start: 5},
  { date: '09/08/2023', q: 1, type: 'block', start: 6},
  //{ date: '09/09/2023', type: 'block', start: },
  
  //{ date: '09/10/2023', type: 'block', start: },
  { date: '09/11/2023', q: 1, type: 'block', start: 1},
  { date: '09/12/2023', q: 1, type: 'block', start: 2},
  { date: '09/13/2023', q: 1, type: 'block', start: 3},
  { date: '09/14/2023', q: 1, type: 'block', start: 4},
  { date: '09/15/2023', q: 1, type: 'noclass', start: 0},
  //{ date: '09/16/2023', type: 'block', start: },
  //{ date: '09/17/2023', type: 'block', start: 5},
  { date: '09/18/2023', q: 1, type: 'block', start: 5},
  { date: '09/19/2023', q: 1, type: 'block', start: 6},
  
  { date: '09/20/2023', q: 1, type: 'block', start: 1},
  { date: '09/21/2023', q: 1, type: 'block', start: 2},
  { date: '09/22/2023', q: 1, type: 'all', start: 4},
  //{ date: '09/23/2023', type: 'block', start: },
  //{ date: '09/24/2023', type: 'block', start: },
  { date: '09/25/2023', q: 1, type: 'block', start: 3},
  { date: '09/26/2023', q: 1, type: 'block', start: 4},
  { date: '09/27/2023', q: 1, type: 'block', start: 5},
  { date: '09/28/2023', q: 1, type: 'block', start: 6},
  { date: '09/29/2023', q: 1, type: 'modified', start: 2},
  
  //{ date: '09/30/2023', type: 'block', start: },
  
  //{ date: '10/01/2023', type: 'all', start: 3},
  { date: '10/02/2023', q: 1, type: 'block', start: 1},
  { date: '10/03/2023', q: 1, type: 'block', start: 2},
  { date: '10/04/2023', q: 1, type: 'block', start: 3},
  { date: '10/05/2023', q: 1, type: 'block', start: 4},
  { date: '10/06/2023', q: 1, type: 'all', start: 5},
  //{ date: '10/07/2023', type: 'block', start: },
  //{ date: '10/08/2023', type: 'block', start: },
  //{ date: '10/09/2023', type: 'block', start: },
  
  //{ date: '10/10/2023', type: 'block', start: },
  //{ date: '10/11/2023', type: 'all', start: },
  //{ date: '10/12/2023', type: 'block', start: },
  //{ date: '10/13/2023', type: 'block', start: },
  //{ date: '10/14/2023', type: 'block', start: },
  //{ date: '10/15/2023', type: 'block', start: },
  { date: '10/16/2023', q: 2, type: 'block', start: 6},
  { date: '10/17/2023', q: 2, type: 'block', start: 1},
  { date: '10/18/2023', q: 2, type: 'block', start: 2},
  { date: '10/19/2023', q: 2, type: 'block', start: 3},
  
  { date: '10/20/2023', q: 2, type: 'all', start: 6},
  //{ date: '10/21/2023', type: 'block', start: },
  //{ date: '10/22/2023', type: 'block', start: },
  { date: '10/23/2023', q: 2, type: 'block', start: 4},
  { date: '10/24/2023', q: 2, type: 'block', start: 5},
  { date: '10/25/2023', q: 2, type: 'block', start: 6},
  { date: '10/26/2023', q: 2, type: 'block', start: 1},
  { date: '10/27/2023', q: 2, type: 'noclass', start: 0},
  //{ date: '10/28/2023', type: 'block', start: 2},
  //{ date: '10/29/2023', type: 'block', start: 3},
  
  { date: '10/30/2023', q: 2, type: 'block', start: 2},
  { date: '10/31/2023', q: 2, type: 'block', start: 3},
  
  { date: '11/01/2023', q: 2, type: 'block', start: 4},
  { date: '11/02/2023', q: 2, type: 'block', start: 5},
  { date: '11/03/2023', q: 2, type: 'all', start: 1},
  //{ date: '11/04/2023', type: 'block', start: },
  //{ date: '11/05/2023', type: 'block', start: },
  { date: '11/06/2023', q: 2, type: 'block', start: 6},
  { date: '11/07/2023', q: 2, type: 'block', start: 1},
  { date: '11/08/2023', q: 2, type: 'block', start: 2},
  { date: '11/09/2023', q: 2, type: 'block', start: 3},
  
  //{ date: '11/10/2023', type: 'block', start: },
  //{ date: '11/11/2023', type: 'block', start: },
  //{ date: '11/12/2023', type: 'block', start: },
  { date: '11/13/2023', q: 2, type: 'block', start: 4},
  { date: '11/14/2023', q: 2, type: 'block', start: 5},
  { date: '11/15/2023', q: 2, type: 'block', start: 6},
  { date: '11/16/2023', q: 2, type: 'block', start: 1},
  { date: '11/17/2023', q: 2, type: 'all', start: 2},
  //{ date: '11/18/2023', type: 'block', start: 2},
  //{ date: '11/19/2023', type: 'block', start: 3},
  
  { date: '11/20/2023', q: 2, type: 'block', start: 2},
  { date: '11/21/2023', q: 2, type: 'block', start: 3},
  { date: '11/22/2023', q: 2, type: 'all', start: 3},
  //{ date: '11/23/2023', type: 'block', start: },
  //{ date: '11/24/2023', type: 'block', start: },
  //{ date: '11/25/2023', type: 'block', start: },
  //{ date: '11/26/2023', type: 'block', start: 6},
  { date: '11/27/2023', q: 2, type: 'block', start: 4},
  { date: '11/28/2023', q: 2, type: 'block', start: 5},
  { date: '11/29/2023', q: 2, type: 'block', start: 6},
  
  { date: '11/30/2023', q: 2, type: 'block', start: 1},
  
  
  { date: '12/01/2023', q: 2, type: 'all', start: 4},
  //{ date: '12/02/2023', type: 'block', start: },
  //{ date: '12/03/2023', type: 'block', start: },
  { date: '12/04/2023', q: 2, type: 'block', start: 2},
  { date: '12/05/2023', q: 2, type: 'block', start: 3},
  { date: '12/06/2023', q: 2, type: 'block', start: 4},
  { date: '12/07/2023', q: 2, type: 'block', start: 5},
  { date: '12/08/2023', q: 2, type: 'modified', start: 3},
  //{ date: '12/09/2023', type: 'block', start: 3},
  
  //{ date: '12/10/2023', type: 'block', start: },
  { date: '12/11/2023', q: 2, type: 'block', start: 6},
  { date: '12/12/2023', q: 2, type: 'block', start: 1},
  { date: '12/13/2023', q: 2, type: 'block', start: 2},
  { date: '12/14/2023', q: 2, type: 'block', start: 3},
  { date: '12/15/2023', q: 2, type: 'all', start: 5},
  //{ date: '12/16/2023', type: 'block', start: 6},
  //{ date: '12/17/2023', type: 'block', start: 1},
  { date: '12/18/2023', q: 2, type: 'block', start: 4},
  { date: '12/19/2023', q: 2, type: 'block', start: 5},
  
  { date: '12/20/2023', q: 2, type: 'block', start: 6},
  { date: '12/21/2023', q: 2, type: 'block', start: 1},
  //{ date: '12/22/2023', type: 'block', start: },
  //{ date: '12/23/2023', type: 'block', start: },
  //{ date: '12/24/2023', type: 'block', start: },
  //{ date: '12/25/2023', type: 'block', start: },
  //{ date: '12/26/2023', type: 'block', start: 6},
  //{ date: '12/27/2023', type: 'block', start: 1},
  //{ date: '12/28/2023', type: 'block', start: 2},
  //{ date: '12/29/2023', type: 'block', start: 3},
  //
  //{ date: '12/30/2023', type: 'block', start: },
  //{ date: '12/31/2023', type: 'block', start: },
  //{ date: '12/32/2023', type: 'block', start: },
  //{ date: '12/33/2023', type: 'block', start: },
  //{ date: '12/34/2023', type: 'block', start: },
  //{ date: '12/35/2023', type: 'block', start: },
  //{ date: '12/36/2023', type: 'block', start: 6},
  //{ date: '12/37/2023', type: 'block', start: 1},
  //{ date: '12/38/2023', type: 'block', start: 2},
  //{ date: '12/39/2023', type: 'block', start: 3},
  //
  //
  //{ date: '01/01/2024', type: 'block', start: },
  //{ date: '01/02/2024', type: 'block', start: },
  //{ date: '01/03/2024', type: 'block', start: },
  //{ date: '01/04/2024', type: 'block', start: },
  //{ date: '01/05/2024', type: 'block', start: },
  //{ date: '01/06/2024', type: 'block', start: 6},
  //{ date: '01/07/2024', type: 'block', start: 1},
  { date: '01/08/2024', q: 3, type: 'block', start: 3},
  { date: '01/09/2024', q: 3, type: 'block', start: 4},
  
  { date: '01/10/2024', q: 3, type: 'block', start: 5},
  { date: '01/11/2024', q: 3, type: 'block', start: 6},
  { date: '01/12/2024', q: 3, type: 'all', start: 6},
  //{ date: '01/13/2024', type: 'block', start: },
  //{ date: '01/14/2024', type: 'block', start: },
  //{ date: '01/15/2024', type: 'block', start: },
  { date: '01/16/2024', q: 3, type: 'block', start: 1},
  { date: '01/17/2024', q: 3, type: 'block', start: 2},
  { date: '01/18/2024', q: 3, type: 'block', start: 3},
  { date: '01/19/2024', q: 3, type: 'block', start: 4},
  
  //{ date: '01/20/2024', type: 'block', start: },
  //{ date: '01/21/2024', type: 'block', start: },
  { date: '01/22/2024', q: 3, type: 'block', start: 5},
  { date: '01/23/2024', q: 3, type: 'block', start: 6},
  { date: '01/24/2024', q: 3, type: 'block', start: 1},
  { date: '01/25/2024', q: 3, type: 'block', start: 2},
  { date: '01/26/2024', q: 3, type: 'noclass', start: 0},
  //{ date: '01/27/2024', type: 'block', start: 1},
  //{ date: '01/28/2024', type: 'block', start: 2},
  { date: '01/29/2024', q: 3, type: 'block', start: 3},
  
  { date: '01/30/2024', q: 3, type: 'block', start: 4},
  { date: '01/31/2024', q: 3, type: 'block', start: 5},
  
  { date: '02/01/2024', q: 3, type: 'block', start: 6},
  { date: '02/02/2024', q: 3, type: 'all', start: 1},
  //{ date: '02/03/2024', type: 'block', start: },
  //{ date: '02/04/2024', type: 'block', start: },
  { date: '02/05/2024', q: 3, type: 'block', start: 1},
  { date: '02/06/2024', q: 3, type: 'block', start: 2},
  { date: '02/07/2024', q: 3, type: 'block', start: 3},
  { date: '02/08/2024', q: 3, type: 'block', start: 4},
  { date: '02/09/2024', q: 3, type: 'all', start: 2},
			
  //{ date: '02/10/2024', type: 'block', start: },
  //{ date: '02/11/2024', type: 'block', start: },
  { date: '02/12/2024', q: 3, type: 'noclass', start: 1},
  { date: '02/13/2024', q: 3, type: 'block', start: 5},
  { date: '02/14/2024', q: 3, type: 'block', start: 6},
  { date: '02/15/2024', q: 3, type: 'block', start: 1},
  { date: '02/16/2024', q: 3, type: 'block', start: 2},
  //{ date: '02/17/2024', type: 'block', start: 1},
  //{ date: '02/18/2024', type: 'block', start: 2},
  //{ date: '02/19/2024', type: 'block', start: 3},
			
  { date: '02/20/2024', q: 3, type: 'block', start: 3},
  { date: '02/21/2024', q: 3, type: 'block', start: 4},
  { date: '02/22/2024', q: 3, type: 'block', start: 5},
  { date: '02/23/2024', q: 3, type: 'block', start: 6},
  //{ date: '02/24/2024', type: 'block', start: },
  //{ date: '02/25/2024', type: 'block', start: },
  { date: '02/26/2024', q: 3, type: 'block', start: 1},
  { date: '02/27/2024', q: 3, type: 'block', start: 2},
  { date: '02/28/2024', q: 3, type: 'block', start: 3},
  { date: '02/29/2024', q: 3, type: 'block', start: 4},
  
  
  { date: '03/01/2024', q: 3, type: 'all', start: 3},
  //{ date: '03/02/2024', type: 'block', start: },
  //{ date: '03/03/2024', type: 'block', start: },
  { date: '03/04/2024', q: 3, type: 'block', start: 5},
  { date: '03/05/2024', q: 3, type: 'block', start: 6},
  { date: '03/06/2024', q: 3, type: 'block', start: 1},
  { date: '03/07/2024', q: 3, type: 'block', start: 2},
  { date: '03/08/2024', q: 3, type: 'modified', start: 4},
  //{ date: '03/09/2024', type: 'block', start: 2},
			
  //{ date: '03/10/2024', type: 'block', start: },
  { date: '03/11/2024', q: 3, type: 'block', start: 3},
  { date: '03/12/2024', q: 3, type: 'block', start: 4},
  { date: '03/13/2024', q: 3, type: 'block', start: 5},
  { date: '03/14/2024', q: 3, type: 'block', start: 6},
  { date: '03/15/2024', q: 3, type: 'all', start: 4},
  //{ date: '03/16/2024', type: 'block', start: 6},
  //{ date: '03/17/2024', type: 'block', start: 1},
  //{ date: '03/18/2024', type: 'block', start: 2},
  //{ date: '03/19/2024', type: 'block', start: 3},
			
  //{ date: '03/20/2024', type: 'block', start: },
  //{ date: '03/21/2024', type: 'block', start: },
  //{ date: '03/22/2024', type: 'block', start: },
  //{ date: '03/23/2024', type: 'block', start: },
  //{ date: '03/24/2024', type: 'block', start: },
  { date: '03/25/2024', q: 4, type: 'block', start: 2},
  //{ date: '03/26/2024', type: 'block', start: 6},
  { date: '03/27/2024', q: 4, type: 'block', start: 3},
  { date: '03/28/2024', q: 4, type: 'all', start: 5},
  //{ date: '03/29/2024', type: 'block', start: 3},
			
  //{ date: '03/30/2024', type: 'block', start: },
  //{ date: '03/31/2024', type: 'block', start: },
  
  { date: '04/01/2024', q: 4, type: 'block', start: 4},
  { date: '04/02/2024', q: 4, type: 'block', start: 5},
  { date: '04/03/2024', q: 4, type: 'block', start: 6},
  { date: '04/04/2024', q: 4, type: 'block', start: 1},
  { date: '04/05/2024', q: 4, type: 'all', start: 6},
  //{ date: '04/06/2024', type: 'block', start: 2},
  //{ date: '04/07/2024', type: 'block', start: 3},
  { date: '04/08/2024', q: 4, type: 'block', start: 2},
  { date: '04/09/2024', q: 4, type: 'block', start: 3},
			
  { date: '04/10/2024', q: 4, type: 'block', start: 4},
  { date: '04/11/2024', q: 4, type: 'block', start: 5},
  { date: '04/12/2024', q: 4, type: 'noclass', start: 0},
  //{ date: '04/13/2024', type: 'block', start: },
  //{ date: '04/14/2024', type: 'block', start: },
  { date: '04/15/2024', q: 4, type: 'block', start: 6},
  { date: '04/16/2024', q: 4, type: 'block', start: 1},
  { date: '04/17/2024', q: 4, type: 'block', start: 2},
  { date: '04/18/2024', q: 4, type: 'block', start: 3},
  { date: '04/19/2024', q: 4, type: 'all', start: 1},
			
  //{ date: '04/20/2024', type: 'block', start: },
  //{ date: '04/21/2024', type: 'block', start: },
  { date: '04/22/2024', q: 4, type: 'block', start: 4},
  { date: '04/23/2024', q: 4, type: 'block', start: 5},
  { date: '04/24/2024', q: 4, type: 'block', start: 6},
  { date: '04/25/2024', q: 4, type: 'block', start: 1},
  { date: '04/26/2024', q: 4, type: 'all', start: 2},
  //{ date: '04/27/2024', type: 'block', start: 2},
  //{ date: '04/28/2024', type: 'block', start: 2},
  { date: '04/29/2024', q: 4, type: 'block', start: 2},
			
  { date: '04/30/2024', q: 4, type: 'block', start: 3},
    
  { date: '05/01/2024', q: 4, type: 'block', start: 4},
  { date: '05/02/2024', q: 4, type: 'block', start: 5},
  { date: '05/03/2024', q: 4, type: 'all', start: 3},
  //{ date: '05/04/2024', type: 'block', start: },
  //{ date: '05/05/2024', type: 'block', start: },
  { date: '05/06/2024', q: 4, type: 'block', start: 6},
  { date: '05/07/2024', q: 4, type: 'block', start: 1},
  { date: '05/08/2024', q: 4, type: 'block', start: 2},
  { date: '05/09/2024', q: 4, type: 'block', start: 3},
			
  { date: '05/10/2024', q: 4, type: 'modified', start: 5},
  //{ date: '05/11/2024', type: 'block', start: },
  //{ date: '05/12/2024', type: 'block', start: },
  { date: '05/13/2024', q: 4, type: 'block', start: 4},
  { date: '05/14/2024', q: 4, type: 'block', start: 5},
  { date: '05/15/2024', q: 4, type: 'block', start: 6},
  { date: '05/16/2024', q: 4, type: 'block', start: 1},
  { date: '05/17/2024', q: 4, type: 'modified', start: 6},
  //{ date: '05/18/2024', type: 'block', start: 2},
  //{ date: '05/19/2024', type: 'block', start: 3},
			
  { date: '05/20/2024', q: 4, type: 'block', start: 2},
  { date: '05/21/2024', q: 4, type: 'block', start: 3},
  { date: '05/22/2024', q: 4, type: 'block', start: 4},
  { date: '05/23/2024', q: 4, type: 'block', start: 5},
  { date: '05/24/2024', q: 4, type: 'all', start: 4},
  //{ date: '05/25/2024', type: 'block', start: },
  //{ date: '05/26/2024', type: 'block', start: 6},
  //{ date: '05/27/2024', type: 'block', start: 1},
  { date: '05/28/2024', q: 4, type: 'block', start: 6},
  { date: '05/29/2024', q: 4, type: 'block', start: 1},
			
  { date: '05/30/2024', q: 4, type: 'block', start: 2},
  { date: '05/31/2024', q: 4, type: 'noclass', start: 0}
  
];
// Array of objects containing start time, end time, and name
const noclass = [
  { start: '08:00', end: '15:00', name: 'No Student Schedule' }
];

const blockPeriodsA = [
  { start: '08:00', end: '08:15', name: 'Homeroom' },
  { start: '08:15', end: '08:18', name: 'Passing' },
  { start: '08:18', end: '09:38', name: 'Block 1' },
  { start: '09:38', end: '09:53', name: 'Recess' },
  { start: '09:53', end: '09:56', name: 'Passing' },
  { start: '09:56', end: '11:16', name: 'Block 2' },
  
  { start: '11:16', end: '11:46', name: 'Lunch' },
  { start: '11:46', end: '11:49', name: 'Passing' },
  { start: '11:49', end: '12:52', name: 'STAR' },
  
  { start: '12:52', end: '12:55', name: 'Passing' },
  { start: '12:55', end: '14:15', name: 'Block 3' },
  { start: '14:15', end: '15:00', name: 'Teacher Meeting' }
];

const blockPeriodsB = [
  { start: '08:00', end: '08:15', name: 'Homeroom' },
  { start: '08:15', end: '08:18', name: 'Passing' },
  { start: '08:18', end: '09:38', name: 'Block 1' },
  { start: '09:38', end: '09:53', name: 'Recess' },
  { start: '09:53', end: '09:56', name: 'Passing' },
  { start: '09:56', end: '11:16', name: 'Block 2' },
  
  { start: '11:16', end: '11:19', name: 'Passing' },
  { start: '11:19', end: '11:49', name: 'STAR' },
  { start: '11:49', end: '12:19', name: 'Lunch' },
  { start: '12:19', end: '12:22', name: 'Passing' },
  { start: '12:22', end: '12:52', name: 'STAR' },
  
  { start: '12:52', end: '12:55', name: 'Passing' },
  { start: '12:55', end: '14:15', name: 'Block 3' },
  { start: '14:15', end: '15:00', name: 'Teacher Meeting' }
];

const blockPeriodsC = [
  { start: '08:00', end: '08:15', name: 'Homeroom' },
  { start: '08:15', end: '08:18', name: 'Passing' },
  { start: '08:18', end: '09:38', name: 'Block 1' },
  { start: '09:38', end: '09:53', name: 'Recess' },
  { start: '09:53', end: '09:56', name: 'Passing' },
  { start: '09:56', end: '11:16', name: 'Block 2' },
  
  { start: '11:16', end: '11:19', name: 'Passing' },
  { start: '11:19', end: '12:22', name: 'STAR' },
  { start: '12:22', end: '12:52', name: 'Lunch' },
  
  { start: '12:52', end: '12:55', name: 'Passing' },
  { start: '12:55', end: '14:15', name: 'Block 3' },
  { start: '14:15', end: '15:00', name: 'Teacher Meeting' }
];

const allPeriodsA = [
  { start: '08:00', end: '08:09', name: 'Homeroom' },
  { start: '08:09', end: '08:12', name: 'Passing' },
  { start: '08:12', end: '08:57', name: 'Class 1' },
  { start: '08:57', end: '09:00', name: 'Passing' },
  { start: '09:00', end: '09:45', name: 'Class 2' },
  { start: '09:45', end: '10:00', name: 'Recess' },
  { start: '10:00', end: '10:03', name: 'Passing' },
  { start: '10:03', end: '10:48', name: 'Class 3' },
  { start: '10:48', end: '10:51', name: 'Passing' },
  { start: '10:51', end: '11:36', name: 'Class 4' },
  
  { start: '11:36', end: '12:06', name: 'Lunch' },
  { start: '12:06', end: '12:09', name: 'Passing' },
  { start: '12:09', end: '12:39', name: 'STAR' },
  
  { start: '12:39', end: '12:42', name: 'Passing' },
  { start: '12:42', end: '13:27', name: 'Class 5' },
  { start: '13:27', end: '13:30', name: 'Passing' },
  { start: '13:30', end: '14:15', name: 'Class 6' },
  { start: '14:15', end: '15:00', name: 'Teacher Meeting' }
];

const allPeriodsB = [
  { start: '08:00', end: '08:09', name: 'Homeroom' },
  { start: '08:09', end: '08:12', name: 'Passing' },
  { start: '08:12', end: '08:57', name: 'Class 1' },
  { start: '08:57', end: '09:00', name: 'Passing' },
  { start: '09:00', end: '09:45', name: 'Class 2' },
  { start: '09:45', end: '10:00', name: 'Recess' },
  { start: '10:00', end: '10:03', name: 'Passing' },
  { start: '10:03', end: '10:48', name: 'Class 3' },
  { start: '10:48', end: '10:51', name: 'Passing' },
  { start: '10:51', end: '11:36', name: 'Class 4' },
  
  { start: '11:36', end: '11:39', name: 'Passing' },
  { start: '11:39', end: '12:09', name: 'STAR' },
  { start: '12:09', end: '12:39', name: 'Lunch' },
  
  { start: '12:39', end: '12:42', name: 'Passing' },
  { start: '12:42', end: '13:27', name: 'Class 5' },
  { start: '13:27', end: '13:30', name: 'Passing' },
  { start: '13:30', end: '14:15', name: 'Class 6' },
  { start: '14:15', end: '15:00', name: 'Teacher Meeting' }
];
