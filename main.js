const { app, BrowserWindow, BrowserView } = require("electron");
const path = require("path");

const init = () => {
	let browserWindow = new BrowserWindow({
		show: true,
		webPreferences: {
			webviewTag: true,
		}
	});

	const browserView = new BrowserView({
		webPreferences: {
			webviewTag: true,
		}
	});

	browserView.webContents.loadURL(path.join(app.getAppPath(), "index.html"));

	browserWindow.setBrowserView(browserView);

	setTimeout(() => {
		app.quit();
	}, 5000);
};

app.on("ready", () => {
	init();
});