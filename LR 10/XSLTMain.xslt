<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                exclude-result-prefixes="msxsl">
    <xsl:template name="main">
        <html>
            <head>
                <link href="StyleSheetMain.css" rel="stylesheet">
                </link>
            </head>
            <body>
                <div id="header">
                    Кровля
                </div>
                <div id="menu">
                    <div id="menu_header">
                        Главное меню сайта
                    </div>
                    <ul>
                        <li>
                            <a href="XMLcompany.xml">
                                Контакты
                            </a>
                        </li>
                        <li>
                            <a href="XMLDEP001.xml">
                                Расчетный
                            </a>
                        </li>
                        <li>
                            <a href="XMLDEP002.xml">
                                Аналитический
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="footer">
                    Практичне завдання 10. Хохлов Богдан. МФ-32
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
