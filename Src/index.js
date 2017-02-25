var child_process = require('child_process'),
    old_spawn = child_process.spawn

child_process.spawn_tips = function(command, args, options){
    var options = options || {},
        cwd = options.cwd || '',
        args = args || [],
        console_tips = [
            cwd,
            command,
            args.join(' ')
        ].join(' ').trim(),
        result;
    console.log(console_tips);
    result = old_spawn.apply(this, arguments);

    result.stdout.on('data',function(data){
        console.log(console_tips, 'stdout', data);
    });

    result.stderr.on('data',function(data){
        console.log(console_tips, 'stderr', data);
    });

    result.on('error',function(error){
        console.log(console_tips, 'Failed to start child process.', error);
    })

    result.on('close',function(code){
        console.log(console_tips, 'child process exited with code', code);
    });
    return result;
}


module.exports = child_process;