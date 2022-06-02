$(() => {
    $('#scheduler').dxScheduler({
        timeZone: 'America/Los_Angeles',
        dataSource: ".vscode/scripts/data.js",
        views: ['day', 'week', 'month'],
        currentView: 'day',
        currentDate: new Date(2021, 3, 29),
        startDayHour: 9,
        height: 600,
    });
});