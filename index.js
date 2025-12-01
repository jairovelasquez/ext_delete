(async function(codioIDE, window) {
    codioIDE.coachBot.register("demo", "Test button", onButtonPress)

////////////////////////////////////////

    async function onButtonPress() {
    const filePath = "somefile.txt";
    const newOutput = `Testing ${Date.now()}`;
    let previousContent = "";

    await codioIDE.coachBot.open();

    try {
        try {
            previousContent = await codioIDE.files.getContent(filePath);
            await codioIDE.coachBot.write(
                `Existing file found. Previous content:\n${previousContent}`
            );
        } catch (readError) {
            await codioIDE.coachBot.write(
                `No existing file at "${filePath}". A new one will be created.`
            );
            previousContent = "";
        }

        if (previousContent !== "") {
            await codioIDE.files.deleteFiles([filePath]);
            await codioIDE.coachBot.write(`Old file "${filePath}" deleted.`);
        }

        const combinedContent = previousContent
            ? `${previousContent}\n${newOutput}`
            : newOutput;

        await codioIDE.files.add(filePath, combinedContent);
        await codioIDE.coachBot.write(
            `File creation result: File "${filePath}" added successfully`
        );

        const content = await codioIDE.files.getContent(filePath);
        await codioIDE.coachBot.write(`File contents:\n${content}`);

        await codioIDE.coachBot.write("All operations completed successfully!");
    } catch (error) {
        await codioIDE.coachBot.write(`Error: ${error?.message ?? error}`);
        console.error(error);
    }
}

}) (window.codioIDE, window)
