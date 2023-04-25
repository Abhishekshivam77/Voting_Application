LIVE VOTE SHARE APPLICATION
With the upcoming elections in Karnataka, we've partnered with "Abtak" news to create a real-time application that displays the live voting share percentage of each party during the election. The three parties contesting the election are A Party, B Party, and C Party.

Your task is to build a real-time application using Socket.io that shows the live voting share percentage of each party. The user interface should be divided into two partitions.

On the left side, the voting share of each party should be displayed in real-time
and on the right side, there should be an input box where users can enter their voterID number, a dropdown where users select a party and click on a "Vote" button to cast their vote.
For example, if there are 7 total votes received at a given moment and A Party has received 2 votes, B Party has received 1 vote, and C Party has received 4 votes, then the vote share of each party would be:

A Party: 28.57%
B Party: 14.28%
C Party: 57.14%
Note: Since election is a serious thing, take care of all good practices mandatorily like

A person should not be able to vote more than once
A person should not be able to cast vote without entering their voter ID number
etc
Sample Input:

Assuming there are 7 votes received so far, User selects "B Party" from the dropdown and clicks on the "Vote" button. Now in total we have 8 votes

Sample Output:

The vote share percentages on the left side of the screen update in real-time to show the new vote share of each party:

A Party: 25% B Party: 25% C Party: 50% Note: The percentages should always add up to ~ 100%.