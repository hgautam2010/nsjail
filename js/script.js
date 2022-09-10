const { exec } = require('child_process');
// /home/himanshu/nsjail-ws/nsjail/nsjail -Mo --user 0 --group 99999 -R /bin/ -R /lib -R /lib64/ -R /usr/ -R /sbin/ -T /dev -R /dev/urandom --keep_caps -- /bin/bash -i
const childProcess = exec('sudo /home/himanshu/nsjail-ws/nsjail/nsjail --user 9999 --group 9999 --rlimit_cpu 5 --cgroup_cpu_ms_per_sec 1000000 --max_cpus 1 --rlimit_stack hard --rlimit_as hard -v -T /var --macvlan_iface enp0s3 --chroot / -Mo --macvlan_vs_ip 192.168.0.44 --macvlan_vs_nm 255.255.255.0 --macvlan_vs_gw 192.168.0.1 -- ./home/himanshu/c/test', { maxBuffer: 1024 * 1024 * 50 }, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    // console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});

let size = 0;
let count = 0;

childProcess.stdout.on('data', function (data) {
    console.log(data);
});