import app from './app';

// Free the port:
// killall -9 node
// ps ax
const port = process.env.PORT || '8888';

app.listen(port, () => {
	console.log(`Server running at ${port}`);
});
