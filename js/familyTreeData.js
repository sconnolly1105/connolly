// familyTreeData.js — CONNOLLY FAMILY TREE
// Ported from Family Echo (familyecho.com) export
// bioActive: "active"   = bio has real content, (Bio) link shown in tree
// bioActive: "inactive" = scaffold only, (Bio) link hidden in tree

const familyTreeData = {
  label: "Larry Conneely",
  opened: true,
  bioActive: "inactive",
  bio: `Name:				#b##u#Larry Conneely#!u##!b#

Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`,
  children: [
    {
      label: "Patsy Conneely c. 1816-Jun 20, 1891 : married to Margaret Lydon",
      opened: true,
      bioActive: "active",
      bio: `Name:				#b##u#Patsy Conneely#!u##!b#
      
Date of Birth:		c. 1816
Date of Death:		Jun 20, 1891
Place of Birth:   Derradda West, Connemara
Place of Death:   Derradda West, Connemara
Residence:        Derradda West, Connemara

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Age at death: 75. Present at death was his son John Conneely (who he?). Did our grandfather have a brother named John?
His death registration is shown in the thumbnail
<img src="images/PatsysDeath.jpg" alt="Patsy's death registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

#b#Spouse:			#u#Margaret Lydon#!u##!b#
Date of Birth:		c. 1830
Date of Death:		May 14, 1910
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#
Age at death: 80. Present at death: Pat Connolly (her husband). But he was dead at the time. Unless! Unless the Pat Conneely from Derradda West who died in 1891 was not her husband. Then who is he and when did her husband die?
Her death registration is shown in the thumbnail
<img src="images/MargaretsDeath.jpg" alt="Margaret's's death registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">
`,
      children: [

        {
          label: "Michael c. 1849-Aug 7, 1936",
          bioActive: "active",
          bio: `Name:				#b##u#Michael Conneely#!u##!b#

Date of Birth:		c. 1849
Date of Death:		Aug 7, 1936
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Age at death: 87. Present at death: Maggie Addley.
His death registration is shown in the thumbnail
<img src="images/MichaelsDeath1936.jpg" alt="Michael's death registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

#b#Spouse:			#u##!u##!b#
Unmarried

#b#Other Information#!b#`
        },

        {
          label: "Jimmy c. 1862-Aug 27, 1947 : married to Mary-Ann McDonagh",
          opened: true,
          bioActive: "active",
          bio: `Name:				#b##u#James Conneely#!u##!b#

Date of Birth:		c. 1862
Date of Death:		Aug 27, 1947
Place of Birth:
Place of Death:
Residence:

Place of Marriage:  Durham/Newcastle-on-Tyne, UK (I am presuming)
Date of Marriage:   1875-76 (ish)

#b#Other Information#!b#
Death cert lists him as being 85. Present at death: John Addley.
His death registration is shown in the thumbnail
<img src="images/JimmysDeath1947.jpg" alt="Jimmy's death refistration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

He emigrated to the north of England, where he married Mary Ann McDonagh, a Durham native of Irish extraction. In 1895–96 they returned to live in Connemara, near his ancestral home.
In 1913, when he would have been over fifty, he left his wife and children behind to emigrate once again — this time to Pittsburgh, where he worked in the steel mills. He remained there until 1922. Why he left remains a family mystery. Was there friction between him and his wife? At the time they ran a shop and had extended credit to many of their neighbours, much of which was never repaid. Were they in debt as a result? We will never know. For his final year or two in America, he was joined by his daughter and son, Maggie and Joe, who had both emigrated to the United States on the same day.
At any rate, he returned to the family home in 1922, where he seemed simply to resume family life. My father often recounted the story of being introduced, on the day of the man's return, to a stranger who, he was told, was his father. Curiously, my father and his brother Joe never seemed to harbour any resentment towards their father for his leaving — indeed, they idolised him — while their feelings towards their mother were considerably less favourable.


#b#Spouse:			#u#Mary-Ann McDonagh#!u##!b#
Date of Birth:		c. 1876
Date of Death:		May 2, 1962
Place of Birth:   Durham, UK
Place of Death:   Derradda West, Connemara
Residence: Derradda West, Connemara

#b#Other Information#!b#
Age at death: 86. Present at death: Michael Conneely (son).
Her death registration is shown in the thumbnail
<img src="images/MaryAnnsDeath1962.jpg" alt="Mary Ann's death registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

Born and bred in Durham, she moved with her husband and infant daughter Maggie to Connemara in 1895–96. One can only imagine the shock she must have felt at such a change of scenery. She did not return to see her mother in Durham until 1927–28, some thirty-two years later — different times indeed! A photograph survives somewhere from that trip, taken when her mother was an old woman.`,
          children: [

            {
              label: "Maggie Aug 31, 1895-? : married to John Addley",
              bioActive: "active",
              bio: `Name:				#b##u#Maggie Addley (nee Conneely)#!u##!b#

Date of Birth:		Aug 31, 1895
Date of Death:    1982-83
Place of Birth:		Durham, UK
Place of Death:		Cleggan
Residence:			Omey Island

Place of Marriage:  Pittsburgs PA, USA
Date of Marriage:

#b#Other Information#!b#
She was raised partly by her aunts and uncles — Michael, Ann, Mary and William — none of whom ever married. Why this was so is another family secret. There appear to have been tensions between the two families (Jimmy and Mary Ann on one side, his brothers and sisters on the other), and Maggie seems to have been the source of them. My uncle Joe remembered a roadside confrontation between the two families. In both the 1901 and 1911 censuses, Maggie is registered as belonging to the household of her uncles and aunts, who all lived together, rather than to that of her parents, Jimmy and Mary Ann. Perhaps this was mere happenstance — she may simply have been visiting on both nights the census was taken — or perhaps it indicated a more permanent arrangement.

She moved to Pittsburgh with her brother Joe in 1920–21, settled there, and eventually married John Addley. They also lived for some time in Girard Ohio, where their son John was born in 1927. Around 1932–33, at the height of the Great Depression, they returned to Ireland and settled in Derradda West, a short distance from where Maggie had been raised. They lived there until 1963, when they moved to Cleggan. At some point in the 1970s they moved again, to Roundstone, where John died. Maggie then moved in with her son, John Jr., in Cleggan, where she lived out her final days.

#b#Spouse:			#u#John Addley#!u##!b#
Date of Birth:
Date of Death:		May 25, 1972
Place of Birth:   Rossadillisk, Cleggan, Co. Galway
Place of Death:   Roundstone
Residence: Roundstone

#b#Other Information#!b#`,
              children: [
                {
                  label: "John c. 1927 (Girard, Ohio)",
                  bioActive: "inactive",
                  bio: `Name:				#b##u#John Addley#!u##!b#

Date of Birth:		c. 1927
Date of Death:		
Place of Birth:		Girard, Ohio, USA
Place of Death:		
Residence:			Cleggan, Connemara

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Born in Girard, Ohio in 1927 while his parents lived there. Returned to Ireland with them around 1932-33.

#b#Spouse:			#u##!u##!b#
Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Place of Residence:	

#b#Other Information#!b#
`,
                  children: [
                  {
                    label: "Johnny c. 1952 (London)",
                    bioActive: "inactive",
                    bio: `Name:				#b##u#Johnny Addley#!u##!b#

Date of Birth:		c. 1952
Date of Death:		
Place of Birth:		
Place of Death:		
Residence:			London

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#


#b#Spouse:			#u##!u##!b#
Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Place of Residence:	

#b#Other Information#!b#
`
                  },
                  {
                    label: "Mary c. 1964 (Cleggan, Connemara)",
                    bioActive: "inactive",
                    bio: `Name:				#b##u#Mary Addley#!u##!b#

Date of Birth:		c. 1964
Date of Death:		
Place of Birth:		
Place of Death:		
Residence:			Cleggan, Connemara

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#


#b#Spouse:			#u##!u##!b#
Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Place of Residence:	

#b#Other Information#!b#
`
                  }
                  ]
                }
              ]
            },

            {
              label: "John Jun 11, 1900-Jun 17, 1900 : died at 6 days",
              bioActive: "active",
              bio: `Name:				#b##u#John Conneely#!u##!b#

Date of Birth:		Jun 11, 1900
Date of Death:		Jun 17, 1900
Place of Birth:		Derradda West
Place of Death:		Derradda West
Residence:

Place of Marriage:	N/A
Date of Marriage:	N/A

#b#Other Information#!b#
Died at 6 days. Cause: convulsions. No medical attention (2 days).
His birth registration is shown in the thumbnail
<img src="images/JohnsBirth1900.jpg" alt="My uncle John's birth registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">
His death registration is shown in the thumbnail
<img src="images/JohnsDeath1900.jpg" alt="My uncle John's death registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">
`
            },

            {
              label: "Joseph Jun 30, 1901-Dec 30, 1992 : married to Leah Rossi",
              bioActive: "active",
              bio: `Name:				#b##u#Joseph Connolly#!u##!b#

Date of Birth:		Jun 30, 1901
Date of Death:		Dec 30, 1992
Place of Birth:   Derradda West, Connemara
Place of Death:   Sacremento CA, USA
Residence:        Sacremento CA, USA

Place of Marriage:	Pittsburgh, USA
Date of Marriage:	1928

#b#Other Information#!b#
Married Leah Rossi in Pittsburgh in 1928 when she was 18. Her mother died in Pittsburgh. Her father died in Italy in 1946.
His and her graves are shown in the thumbnail
<img src="images/JoeAndLeahsGraves.png" alt="My uncle Joe and Leah's graves" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

Both graves on findagrave.com: https://www.findagrave.com/memorial/145212492/joseph-f.-connolly

#b#Spouse:			#u#Leah Rossi#!u##!b#
Date of Birth:		1910
Date of Death:		Oct 16, 2003
Place of Birth:
Place of Death:		Sacramento, USA
Place of Residence:

#b#Other Information#!b#`
            },

            {
              label: "Mary/Molly Mar 4, 1904-May 10, 1915 : died aged 11",
              bioActive: "active",
              bio: `Name:				#b##u#Mary/Molly Conneely#!u##!b#

Date of Birth:		Mar 4, 1904
Date of Death:		May 10, 1915
Place of Birth:   Derradda West, Connemara
Place of Death:  Derradda West, Connemara
Residence:        Derradda West, Connemara

#b#Other Information#!b#
On her death certificate she is listed as 8 when in fact she was 11 years old. Her uncle Michael was present at death. Her father was in the US by this time but where was her mother?
Her birth registration is shown in the thumbnail
<img src="images/MollysBirth1904.jpg" alt="My aunt Molly's death registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">
Her death registration is shown in the thumbnail
<img src="images/MollysDeath1915.jpg" alt="My aunt Molly's death registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

#b#Spouse:			#u#N/A#!u##!b#`
            },

            {
              label: "Annie Mar 14, 1906-Mar 22, 1988",
              bioActive: "active",
              bio: `Name:				#b##u#Annie Conneely#!u##!b#

Date of Birth:		Mar 13, 1906
Date of Death:		Mar 22, 1988
Place of Birth:   Toombeola, Co. Galway
Place of Death:   Galway Hospital
Residence:        Cashel. Co. Galway

Place of Marriage:  London
Date of Marriage:   November 22, 1941

#b#Other Information#!b#
Lived for a great part of her life in London. Following the sudden death of her brother Mick in 1963, she returned to take up residence in her childhood home

#b#Spouse:			#u#Unmarried#!u##!b#

#b#Other Information#!b#`
            },

            {
              label: "Patrick Mar 7, 1909-Mar 16, 1988 : married to Nan Folan",
              opened: true,
              bioActive: "active",
              bio: `Name:				#b##u#Patrick Connolly#!u##!b#

Date of Birth:		Mar 7, 1909
Date of Death:		Mar 16, 1988
Place of Birth:		Toombeola, Roundstone, Co. Galway
Place of Death:		Galway Hospital
Residence:			Cashel, Co. Galway

Place of Marriage:	London
Date of Marriage:	Nov 22, 1941

#b#Other Information#!b#

#b#Spouse:			#u#Nan Folan#!u##!b#
Date of Birth:		Aug 18, 1920
Date of Death:		Aug 16, 2004
Place of Birth:		Lettermore
Place of Death:
Place of Residence:	Cashel, Co. Galway

#b#Other Information#!b#
Nan's family — the Folans and the Higgins of Lettercallow — are covered in full in the Higgins Family Tree.`,
              children: [
                {
                  label: "See Higgins Family Tree for descendants",
                  bioActive: "inactive",
                  bio: `Name:				#b##u#Sean Connolly#!u##!b#

Date of Birth:		May 11, 1955
Place of Birth:		London
Residence:			Oranmore, Co. Galway

Place of Marriage:	Galway
Date of Marriage:	Feb 16, 1979

#b#Other Information#!b#
Sean, his siblings, and his descendants are covered in full in the Higgins Family Tree.

#b#Spouse:			#u#Mairead Hughes#!u##!b#
Place of Birth:		Claremorris, Co. Mayo
Place of Residence:	Oranmore, Co. Galway

#b#Other Information#!b#`
                }
              ]
            },

            {
              label: "Ellen Jun 30, 1910-Nov 1992 : married to Tony Powell",
              bioActive: "active",
              bio: `Name:				#b##u#Ellen Powell (nee Conneely)#!u##!b#

Date of Birth:		Jun 30, 1910
Date of Death:		Nov 1992
Place of Birth:   Toombeola, Connemara, Co. Galway
Place of Death:   Castlemaine, Co. Kerry 
Residence:        Toombeola at time of death although she spent much of her life in London

Place of Marriage:  London
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u#Tony Powell#!u##!b#
Date of Birth:
Date of Death:  1952
Place of Birth: Inishnee, Roundsrone, Co. Galway
Place of Death: London
Place of Residence: london

#b#Other Information#!b#`,
              children: [
                {
                  label: "Mary 1942-2025 : married to Mikey Connelly",
                  bioActive: "active",
                  bio: `Name:				#b##u#Mary Connelly (nee Powell)#!u##!b#

Date of Birth:		1942
Date of Death:		2025
Place of Birth:		London
Place of Death:		Galway Hospital
Residence:			  Toombeola, Co. Galway

Place of Marriage:  London
Date of Marriage:   1965

#b#Other Information#!b#


#b#Spouse:			#u#Mikey Connelly#!u##!b#
Date of Birth:		
Date of Death:	2026	
Place of Birth:	Inishlacken, Roundstone, Co. Galway
Place of Death:		
Place of Residence:	

#b#Other Information#!b#
`,
                  children: [
                  {
                    label: "Tony c. 1965",
                    bioActive: "inactive",
                    bio: `Name:				#b##u#Tony Connelly#!u##!b#

Date of Birth:		c. 1965
Date of Death:		
Place of Birth:		
Place of Death:		
Residence:			

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#


#b#Spouse:			#u##!u##!b#
Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Place of Residence:	

#b#Other Information#!b#
`
                  },
                  {
                    label: "Michael c. 1967",
                    bioActive: "inactive",
                    bio: `Name:				#b##u#Michael Connelly#!u##!b#

Date of Birth:		c. 1967
Date of Death:		
Place of Birth:		
Place of Death:		
Residence:			

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#


#b#Spouse:			#u##!u##!b#
Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Place of Residence:	

#b#Other Information#!b#
`,
                    children: [
                    {
                      label: "Ciaran",
                      bioActive: "inactive",
                      bio: `Name:				#b##u#Ciaran Connelly#!u##!b#

Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Residence:			

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#


#b#Spouse:			#u##!u##!b#
Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Place of Residence:	

#b#Other Information#!b#
`
                    },
                    {
                      label: "Luke",
                      bioActive: "inactive",
                      bio: `Name:				#b##u#Luke Connelly#!u##!b#

Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Residence:			

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#


#b#Spouse:			#u##!u##!b#
Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Place of Residence:	

#b#Other Information#!b#
`
                    }
                    ]
                  }
                  ]
                },
                {
                  label: "Tony 1946- : married to Nancy",
                  bioActive: "active",
                  bio: `Name:				#b##u#Tony Powell#!u##!b#

Date of Birth:		October 10, 1946
Place of Birth:		London
Residence:		    Castlemaine, Co. Kerry	

Place of Marriage:  London

#b#Other Information#!b#


#b#Spouse:			#u#Nancy#!u##!b#

#b#Other Information#!b#
`,
                  children: [
                  {
                    label: "Sean : married to Dorraine",
                    bioActive: "inactive",
                    bio: `Name:				#b##u#Sean Powell#!u##!b#

Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Residence:			

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#


#b#Spouse:			#u#Dorraine#!u##!b#
Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Place of Residence:	

#b#Other Information#!b#
`,
                    children: [
                    {
                      label: "3 children",
                      bioActive: "inactive",
                      bio: `Name:				#b##u#Unknown#!u##!b#

#b#Other Information#!b#
Sean has 3 children`
                    }
                    ]
                  },
                  {
                    label: "Elaine : married to Anthony",
                    bioActive: "inactive",
                    bio: `Name:				#b##u#Elaine Powell#!u##!b#

Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Residence:			

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#


#b#Spouse:			#u#Anthony#!u##!b#
Date of Birth:		
Date of Death:		
Place of Birth:		
Place of Death:		
Place of Residence:	

#b#Other Information#!b#
`,
                    children: [
                    {
                      label: "3 children",
                      bioActive: "inactive",
                      bio: `Name:				#b##u#Unknown#!u##!b#

#b#Other Information#!b#
Elaine has 3 children`
                    }
                    ]
                  }
                  ]
                }
              ]
            },

            {
              label: "Michael (Mick) Sep 22, 1912-Mar 28, 1963",
              bioActive: "active",
              bio: `Name:				#b##u#Michael (Mick) Conneely#!u##!b#

Date of Birth:		Sep 22, 1912
Date of Death:		Mar 28, 1963
Place of Birth:		Derradda West/Toombeola, Co. Galway
Place of Death:		Ballinahinch, Co. Galway
Residence:        Derradda West/Toombeola

Occupation:			Fisherman

#b#Other Information#!b#
His birth registration is shown in the thumbnail
<img src="images/MicksBirth1912.jpg" alt="My uncle Mick's death registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">
His death registration is shown in the thumbnail
<img src="images/MicksDeath1963.jpg" alt="My uncle Mick's death registration" class="bio-thumbnail" onclick="openLightbox(this.src, this.alt)">

#b#Spouse:			#u##!u##!b#
He was a bachelor
#b#Other Information#!b#
He died suddenly on the side of the road at Ballinahinch on his way to work. He was employed by Ballinahinch Castle and estate as a ghillie or gillie, a term used in Ireland and Scotland referring to a fishing or hunting guide (in his case fishing) where they help paying guests pick the best fishing waters and conditions. My brother Paddy made and installed the small concrete cross that can still be seen at the site of his death

He lived alone in the house where he was born. I use to visit him on my way home from school and I only have fond memories of those times. It has alway struck me that, although he was a bachelor, he seemed to have a good understanding of kids`
            }

          ]
        },

        {
          label: "Ann c. 1863-May 17, 1941",
          bioActive: "active",
          bio: `Name:				#b##u#Ann Conneely#!u##!b#

Date of Birth:		c. 1863
Date of Death:		May 17, 1941
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Age at death: 78. Present at death: brother James.
Link to death registration: http://bit.ly/2L5YAWr

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`
        },

        {
          label: "Mary Mar 14, 1865-Nov 7, 1952",
          bioActive: "active",
          bio: `Name:				#b##u#Mary Conneely#!u##!b#

Date of Birth:		Mar 14, 1865
Date of Death:		Nov 7, 1952
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Age at death: 86. Present at death: Maggie Addley.
Link to Mary's birth record: http://bit.ly/36a8AoN
Link to her death record: http://bit.ly/2M3mC4F

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`
        },

        {
          label: "William Aug 27, 1868-May 9, 1945",
          bioActive: "active",
          bio: `Name:				#b##u#William Conneely#!u##!b#

Date of Birth:		Aug 27, 1868
Date of Death:		May 9, 1945
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#
Age at death: 76. Present at death: John Addley.
Link to birth certificate: http://bit.ly/2Me5VDY
Link to death certificate: http://bit.ly/3r4h5Kb

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`
        },

        {
          label: "Lawerence",
          bioActive: "inactive",
          bio: `Name:				#b##u#Lawerence Conneely#!u##!b#

Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Residence:

Place of Marriage:
Date of Marriage:

#b#Other Information#!b#

#b#Spouse:			#u##!u##!b#
Date of Birth:
Date of Death:
Place of Birth:
Place of Death:
Place of Residence:

#b#Other Information#!b#`
        }

      ]
    }
  ]
};

// End of familyTreeData — Connolly Family Tree
