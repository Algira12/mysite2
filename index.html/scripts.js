
function verifyCompatibility() {
    
    const cpu = document.getElementById('cpu').value;
    const gpu = document.getElementById('gpu').value;
    const motherboard = document.getElementById('motherboard').value;
    const ram = document.getElementById('ram').value;
    const storage = document.getElementById('storage').value;
    const cooler = document.getElementById('cooler').value;
    const psu = document.getElementById('psu').value;
    const caseOption = document.getElementById('case').value; 
    const os = document.getElementById('os').value;

    const compatibilityResult = document.getElementById('compatibility-result');
    
    
    if (!cpu || !gpu || !motherboard || !ram || !storage || !cooler || !psu || !caseOption || !os) {
        compatibilityResult.textContent = "Por favor, preencha todos os campos para verificar a compatibilidade.";
        compatibilityResult.style.color = "red";
        return;
    }

    
    let isCompatible = true;

    
    if (ram.startsWith("ddr5") && motherboard === "amd-x670") {
        isCompatible = false;
    }

    
    if ((gpu === "nvidia-4070" || gpu === "amd-rx7900") && psu !== "psu-850w" && psu !== "psu-1000w") {
        isCompatible = false;
    }


    if (cooler === "air-cooler" && caseOption === "mini-tower") {
        isCompatible = false;
    }

    
    if (isCompatible) {
        compatibilityResult.textContent = "A sua configuração está compatível!";
        compatibilityResult.style.color = "green";
    } else {
        compatibilityResult.textContent = "A sua configuração está incompatível. Por favor, revise a sua escolha.";
        compatibilityResult.style.color = "red";
    }
}
