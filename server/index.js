import app from './app';

const port = process.env.PORT || '8888';

app.listen(port, () => {
	console.log(`Server running at ${port}`);
});
