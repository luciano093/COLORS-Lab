describe('Integration Tests: PHP API Endpoints', () => {
    
    const urlBase = "http://myphp4331.com/LAMPAPI";

    test('Login API should return an error for invalid credentials', async () => {
        const payload = {
            login: "thisUserDoesNotExist123",
            password: "wrongPassword456"
        };

        const response = await fetch(`${urlBase}/Login.php`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });

        const data = await response.json();

        expect(response.status).toBe(200);
        expect(data).toHaveProperty('error');
        expect(data.error).toBe("No Records Found");
        expect(data.id).toBe(0);
    });

    test('AddColor API should validate JSON structure', async () => {
        const payload = { color: "Magenta", userId: 9999999 };

        const response = await fetch(`${urlBase}/AddColor.php`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });

        const data = await response.json();

        expect(response.status).toBe(200);
        expect(data).toHaveProperty('error');
    });
});