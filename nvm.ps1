$nodeCurrent = node -v;
$nodeReq = $(Get-Content .nvmrc);
if ($nodeCurrent -ne $nodeReq) {
    Write-Host "Node version is not correct. Please run 'nvm use' to switch to the correct version.";
    nvm use $nodeReq;
} else {
    Write-Host "Node version is correct.";
}
