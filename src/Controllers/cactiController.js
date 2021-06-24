const puppeteer = require('puppeteer');

const bodyParser = require('body-parser');
require('dotenv/config');


class CactiController {

    async alarmes(request, response) {

        try {

            const browser = await puppeteer
                .launch(
                    {
                        headless: true, slowMo: 0,
                        ignoreHTTPSErrors: true,
                        args: ['--disable-web-security',
                            '--disable-features=IsolateOrigins,site-per-process',
                            '--no-sandbox', '--disable-setuid-sandbox'
                        ]
                    })

            const page = await browser.newPage();
            await page.goto(process.env.URL);

            await page.type('[name="login_username"]', process.env.USER);
            await page.type('[name="login_password"]', process.env.PASSWORD);


            await page.click('input[type="submit"]');

            await new Promise(resolve => setTimeout(resolve, 3000));

            await page.goto(`${process.env.URL}plugins/thold/thold_graph.php`);

            await new Promise(resolve => setTimeout(resolve, 3000));

            if (request.body.pesquisa !== '') {
                await page.type('[name="filter"]', request.body.pesquisa);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await page.click('input[type="submit"]');
            }


            await new Promise(resolve => setTimeout(resolve, 3000));

            const result = await page.evaluate(() => {

                const dados = document.querySelectorAll("#main>table:nth-child(5)>tbody>tr>td>table>tbody>tr>td");
                //document.querySelectorAll("#main>table:nth-child(5)>tbody>tr>td>table>tbody>tr>td")[0].innerText
                const arayCells = [];
                const arrayDados = [...dados];



                var i;
                for (i = 0; i < arrayDados.length; i++) {
                    var cells = arrayDados[i].innerText

                    arayCells.push(cells);

                }

                arayCells.shift();
                arayCells.pop();

                const arrayHeader = [];

                for (i = 0; i < 13; i++) {

                    arrayHeader.push(arayCells[i])
                }



                const arrayTable = [];


                var fn;

                for (fn = 13; fn < arrayDados.length; fn++) {

                    arrayTable.push(arayCells[fn])
                }

                return {
                    header: arrayHeader,
                    table: arrayTable
                }


            });


            response.json({
                //"header": result.header,
                table: result.table
            })

            await browser.close();
        } catch (err) {
            response.err;
        }
    }

    async hosts(request, response) {

        try {

            const browser = await puppeteer
                .launch(
                    {
                        headless: true, slowMo: 0,
                        ignoreHTTPSErrors: true,
                        args: ['--disable-web-security',
                            '--disable-features=IsolateOrigins,site-per-process',
                            '--no-sandbox', '--disable-setuid-sandbox'
                        ]
                    })

            const page = await browser.newPage();
            await page.goto(process.env.URL);

            await page.type('[name="login_username"]', process.env.USER);
            await page.type('[name="login_password"]', process.env.PASSWORD);


            await page.click('input[type="submit"]');

            await new Promise(resolve => setTimeout(resolve, 3000));

            await page.goto(`${process.env.URL}plugins/thold/thold_graph.php`);

            await new Promise(resolve => setTimeout(resolve, 3000));

            await page.goto(`${process.env.URL}plugins/thold/thold_graph.php?tab=hoststat`);

            await new Promise(resolve => setTimeout(resolve, 3000));

            if (request.body.pesquisa !== '') {
                await page.type('[name="filter"]', request.body.pesquisa);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await page.click('input[type="submit"]');
            }



            await new Promise(resolve => setTimeout(resolve, 3000));

            const result = await page.evaluate(() => {

                const dados = document.querySelectorAll("#main>table:nth-child(5)>tbody>tr>td>table>tbody>tr>td");
                //document.querySelectorAll("#main>table:nth-child(5)>tbody>tr>td>table>tbody>tr>td")[0].innerText
                const arayCells = [];
                const arrayDados = [...dados];



                var i;
                for (i = 0; i < arrayDados.length; i++) {
                    var cells = arrayDados[i].innerText

                    arayCells.push(cells);

                }

                arayCells.shift();
                arayCells.pop();


                const arrayTable = [];


                var fn;

                for (fn = 11; fn < arrayDados.length; fn++) {

                    arrayTable.push(arayCells[fn])
                }

                return {
                    table: arrayTable
                }


            });


            response.json({
                table: result.table
            })

            await browser.close();

        } catch (err) {
            response.err;
        }
    }

    async logs(request, response) {
        try {
            const browser = await puppeteer
                .launch(
                    {
                        headless: true, slowMo: 0,
                        ignoreHTTPSErrors: true,
                        args: ['--disable-web-security',
                            '--disable-features=IsolateOrigins,site-per-process',
                            '--no-sandbox', '--disable-setuid-sandbox'
                        ]
                    })

            const page = await browser.newPage();
            await page.goto(process.env.URL);

            await page.type('[name="login_username"]', process.env.USER);
            await page.type('[name="login_password"]', process.env.PASSWORD);


            await page.click('input[type="submit"]');

            await new Promise(resolve => setTimeout(resolve, 3000));

            await page.goto(`${process.env.URL}plugins/thold/thold_graph.php`);

            await new Promise(resolve => setTimeout(resolve, 3000));

            await page.goto(`${process.env.URL}plugins/thold/thold_graph.php?tab=log`)

            await new Promise(resolve => setTimeout(resolve, 3000));

            if (request.body.pesquisa !== '') {
                await page.type('[name="filter"]', request.body.pesquisa);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await page.click('input[type="submit"]');
            }



            await new Promise(resolve => setTimeout(resolve, 3000));

            const result = await page.evaluate(() => {

                const dados = document.querySelectorAll("#main>table:nth-child(5)>tbody>tr>td>table>tbody>tr>td");
                //document.querySelectorAll("#main>table:nth-child(5)>tbody>tr>td>table>tbody>tr>td")[0].innerText
                const arayCells = [];
                const arrayDados = [...dados];



                var i;
                for (i = 0; i < arrayDados.length; i++) {
                    var cells = arrayDados[i].innerText

                    arayCells.push(cells);

                }

                arayCells.shift();
                arayCells.pop();


                const arrayTable = [];


                var fn;

                for (fn = 8; fn < arrayDados.length; fn++) {

                    arrayTable.push(arayCells[fn])
                }

                return {
                    table: arrayTable
                }


            });


            response.json({
                table: result.table
            })

            await browser.close();
        } catch (err) {
            response.err;
        }

    }

}

module.exports = new CactiController();