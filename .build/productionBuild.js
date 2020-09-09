const file_system = require('fs');
const archiver = require('archiver');
const copyDir = require('copy-dir');

const outputName = 'build.zip'
const source_dir = 'tmp';

const replaceString = /bundle.js/;

copyDir('public', 'tmp', {cover: true}, () => {
    let html = file_system.readFileSync('tmp/index.html', 'utf8');
    html = html.replace(replaceString, 'assets/js/bundle.js');
    file_system.writeFileSync('tmp/index.html', html);
    
    const output = file_system.createWriteStream(outputName);
    const archive = archiver('zip', {zlib: 0});
    
    output.on('close', () => {
        console.log(`${outputName} (${(archive.pointer() / 1000000).toString()} MB total) has been finalized and the output file descriptor has closed.`);
    });
    archive.on('error', (err) => {
        throw err;
    });
    archive.pipe(output);
    
    
    // append files from a sub-directory and naming it `new-subdir` within the archive (see docs for more options):
    archive.directory(source_dir, false);
    archive.file('test.txt', 'this is a test string');
    archive.finalize().then(() => {
        file_system.rmdirSync('tmp', {recursive: true});
    });
});
